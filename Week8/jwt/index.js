const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./user'); // Import users data
const app = express();

// Secret key for signing and verifying tokens
const secretKey = 'Dinaxi@#'; // Replace with a secure key in production

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRpbmF4aSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjNhZG1pbiIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJpYXQiOjE3NDQxMDU4NTAsImV4cCI6MTc0NDEwOTQ1MH0.uGVdz7lorNGNKjxJeNSSRBlbEXC4TZpstMRIHscV0Fc'; //authHeader && authHeader.split(' ')[1]; // Assuming "Bearer <token>" format
    if (!token) return res.status(401).send('Access Denied: No token provided.');

    jwt.verify(token, secretKey, (err, users) => {
        if (err) return res.status(403).send('Access Denied: Invalid token.');
        req.users = users; // Attach the decoded users data to the request object
        next();
    });
};

// Route to generate a token
app.get('/generate-token', (req, res) => {
    const token = jwt.sign(users, secretKey, { expiresIn: '1h' }); // Token valid for 1 hour
    res.json({ token });
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', users: req.users });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});