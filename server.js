const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware: parse JSON bodies
app.use(express.json());

// Serve static files (e.g., CSS, JS, images) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js inside Docker!');
});

// JSON API route
app.get('/api/info', (req, res) => {
  res.json({
    app: 'Node.js Docker App',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date()
  });
});

// Dynamic route with parameter
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}! Welcome to the Dockerized Node.js app.`);
});

// POST route example
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully!',
    yourData: data
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
