import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import CountVectorizer

# Load the larger dataset
data = {
    'url': [
        "http://example.com", "http://paypal.com", "http://bankofamerica.com", "http://google.com",
        "http://microsoft.com", "http://apple.com", "http://amazon.com", "http://yahoo.com",
        "http://secure-paypal-login.com", "http://paypallogin.com", "http://verify-bank-login.com",
        "http://login-update.com", "http://banking-login.com", "http://account-security-warning.com",
        "http://fake-login.com", "http://secure-amazon-info.com"
    ],
    'label': [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]  # Now both lists have 16 elements
}

df = pd.DataFrame(data)

# Preprocess URLs using a character-level vectorizer
vectorizer = CountVectorizer(analyzer='char')
X = vectorizer.fit_transform(df['url'])
y = df['label']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model using a Random Forest Classifier
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Save the trained model and vectorizer
joblib.dump(model, 'model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')

# Test the model and print accuracy
accuracy = model.score(X_test, y_test)
print(f"Model Accuracy: {accuracy:.2f}")
