// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const phishingRoutes = require('./routes/phishingRoutes');

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/phishing', phishingRoutes);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Backend running on port ${port}`);
// });


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
