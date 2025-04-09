const jwt = require('jsonwebtoken');

const payload = {
  userId: 123,
  username: 'john.doe',
  roles: ['user', 'admin']
};

// const secretKey = 'your_secret_key';

// const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

// console.log(token);