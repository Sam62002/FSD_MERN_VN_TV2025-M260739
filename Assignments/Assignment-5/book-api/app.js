// app.js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes.js');


const app = express();
const PORT = 3000;

// 1) Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/bookdb')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDb connection error:', err));
// 2) Middleware to parse JSON
app.use(express.json());

// 3) Custom logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 4) Routes
app.use('/books', bookRoutes);

// 5) Default route
app.get('/', (req, res) => {
  res.send('Book Management API is running');
});

// 6) Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});