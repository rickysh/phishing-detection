const express = require('express');
const cors = require('cors');
const phishingRoutes = require('./routes/phishingRoutes'); // ✅ Make sure this matches

const app = express();

app.use(cors());
app.use(express.json());

// Use phishing detection routes
app.use('/api', phishingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
