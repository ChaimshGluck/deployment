import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

// Middleware
// app.use(cors({
//     origin: 'https://shark-app-lstbh.ondigitalocean.app'
// }));
app.use(cors())

// For any other routes, serve the React front-end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Serve static files from the React app
const publicPath = path.join(__dirname, '../client/build');
app.use(express.static(publicPath));

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
  });
  
  // Simple API route
  app.get('/api/message', (req, res) => {
    console.log('Sending message from /api/message');
    res.json({ message: "Hello from the back-end!" });
  });

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
