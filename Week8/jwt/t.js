const jwt = require('jsonwebtoken');

// Generate a JWT
const payload = {
  userId: 123,
  username: 'john.doe'
};

const secretKey = 'your-secret-key'; // Keep this secret!

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated Token:', token);

// Verify the JWT
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Error verifying token:', err);
  } else {
    console.log('Decoded Payload:', decoded);
  }
});