const express = require('express');
const axios = require('axios');

const router = express.Router();

// Define route for predicting phishing URLs
router.post('/predict', async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        // Send URL to Flask API for prediction
        const response = await axios.post('http://localhost:5001/predict', { url });

        res.json(response.data);
    } catch (error) {
        console.error('Error in prediction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
