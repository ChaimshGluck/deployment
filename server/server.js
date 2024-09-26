import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('filename:', __filename);
console.log('dir name:', __dirname)

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Serve static files from the React app
// const publicPath = path.join(__dirname, '../client/build');
// app.use(express.static(publicPath));

// Simple API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the back-end!" });
});

// For any other routes, serve the React front-end
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
