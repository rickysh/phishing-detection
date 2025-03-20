# Phishing URL Detection

This project is a web application that detects phishing URLs using a machine learning model. It is built with a **MERN stack** (MongoDB, Express, React, Node.js) for the frontend and backend, and **Flask** for serving the machine learning model. The **MERN Backend** communicates with the **Flask API** to perform phishing detection.

## Prerequisites

1. **Node.js** and **npm** (for the MERN backend and frontend)
2. **Python** (for running the Flask server)
3. Install the necessary dependencies for the project.

## Setup Instructions

### 1. **Flask (ML Model)**

In the `ml_model/` directory, you need to set up a Flask API to serve the machine learning model. Follow these steps:

1. Install Python dependencies:
   ```bash
   cd ml_model
   pip install -r requirements.txt

2. Run the Flask app:
   ```bash
   python app.py
The Flask API will run on http://localhost:5000.

### 2. **MERN Backend (Node.js + Express)**

In the `backend/` directory, you'll set up the **Node.js** backend.

1. Install Node.js dependencies:
   ```bash
   cd backend
   npm install

2. Run the backend server:
   ```bash
   npm start
The backend will run on http://localhost:5001.

### 3. **React Frontend**

In the `frontend/` directory, you'll set up the React app.

1. Install React dependencies:
   ```bash
   cd frontend
   npm install

2. Run the React app:
   ```bash
   npm start
The frontend will run on http://localhost:3000.

## How It Works

1. The **Frontend** (React) sends a URL to the **MERN Backend**.
2. The **MERN Backend** calls the **Flask API** for phishing URL detection.
3. The **Flask API** uses the machine learning model to classify the URL as phishing or safe.
4. The **MERN Backend** receives the prediction from the Flask API and sends it back to the **Frontend**.
5. The **Frontend** displays the result to the user (whether the URL is phishing or safe).

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js, fetch API
- **Machine Learning Model**: Flask, Python
- **ML Libraries**: scikit-learn, pandas, numpy

## Notes

- Ensure both the **Flask API** and **MERN Backend** are running before testing the frontend.
- The Flask API will be running on `http://localhost:5000`, and the MERN Backend on `http://localhost:5001`.
- The React frontend communicates with the **MERN Backend** at `http://localhost:3000`.
