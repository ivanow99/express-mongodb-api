const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/collection1', require('./routes/collection1Routes'));
app.use('/api/collection2', require('./routes/collection2Routes'));
app.use('/api/collection3', require('./routes/collection3Routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
