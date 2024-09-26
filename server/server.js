const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Simple API route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the back-end!" });
});

// For any other routes, serve the React front-end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
