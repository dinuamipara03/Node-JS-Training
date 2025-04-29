const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Secret key for signing and verifying tokens
const secretKey = 'Dinaxi@#'; // Replace with a secure key in production

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRpbmF4aSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjNhZG1pbiIsImlhdCI6MTc0Mzc1ODQzMCwiZXhwIjoxNzQzNzYyMDMwfQ.2z-j321LxFA5MA1iSbLce_h97tcxeejTlffBD3PocYo'; // Assuming "Bearer <token>" format    authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).send('Access Denied: No token provided.');

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send('Access Denied: Invalid token.');
        req.user = user; // Attach the decoded user data to the request object
        next();
    });
};

// Route to generate a token
app.get('/generate-token', (req, res) => {
    const user = { username: 'Dinaxi', password: 'password123admin' }; // Example user data
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // Token valid for 1 hour
    res.json({ token });
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});