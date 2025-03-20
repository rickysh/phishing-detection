import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit

    if (inputValue) {
      try {
        // Make the POST request to the backend
        const response = await fetch('http://localhost:5000/api/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: inputValue }),  // Sending URL data to the backend
        });

        // Parse the response from backend
        const data = await response.json();

        console.log(data);  // Log the response to check the value

        // Check the response and set the prediction state
        if (data.isPhishing !== undefined) {
          setPrediction(data.isPhishing);  // Set the prediction to true or false
        } else {
          setPrediction("Error: No prediction found");
        }
      } catch (error) {
        console.error('Error:', error);
        setPrediction('Error detecting URL');
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Phishing Detection</h1>
        <p className="subtitle">Enter a URL to check if it's safe or phishing</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="input"
            placeholder="Enter URL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="button">
            Check
          </button>
        </form>

        {prediction !== null && (
          <div className="result">
            <h2>Prediction:</h2>
            <p className={prediction ? 'danger' : 'safe'}>
              {prediction ? '⚠️ Phishing URL' : '✅ Safe URL'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
