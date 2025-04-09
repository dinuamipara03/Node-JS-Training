const express = require('express');
const jwt = require('jsonwebtoken');
const payload = require('./token'); // Import tokens data
const app = express();

// Secret key for signing and verifying tokens
const secretKey = 'your_secret_key'; // Replace with a secure key in production

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJqb2huLmRvZSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE3NDQxMDY3NTIsImV4cCI6MTc0NDExMDM1Mn0.5pCC8Jgruqs3wiKtTjXTKsT46crgG6eC-eMGs4duCus'; //authHeader && authHeader.split(' ')[1]; // Assuming "Bearer <token>" format
    if (!token) return res.status(401).send('Access Denied: No token provided.');

    jwt.verify(token, secretKey, (err, tokens) => {
        if (err) return res.status(403).send('Access Denied: Invalid token.');
        req.payload = payload; // Attach the decoded tokens data to the request object
        next();
    });
};

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully'});
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});