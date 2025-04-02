const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
  const receivedData = req.body;
  // Process the received data
  res.status(201).send('Data received successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});