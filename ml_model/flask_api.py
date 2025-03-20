from flask import Flask, request, jsonify
import joblib
import re

app = Flask(__name__)

# Load the trained model and vectorizer
model = joblib.load('model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

def is_valid_url(url):
    """Check if the input is a valid URL format."""
    pattern = re.compile(
        r'^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$', re.IGNORECASE
    )
    return re.match(pattern, url)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data or 'url' not in data:
        return jsonify({'error': 'Missing URL in request'}), 400

    url = data['url']

    if not is_valid_url(url):
        return jsonify({'error': 'Invalid URL format'}), 400

    # Convert URL to feature vector
    features = vectorizer.transform([url])

    # Make prediction
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1]

    return jsonify({
        'url': url,
        'isPhishing': bool(prediction),
        'confidence': round(probability, 4)
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
