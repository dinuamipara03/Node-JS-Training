const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000; 

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 // Specify the upload directory
 cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {
 // Define the file name format
 cb(null, file.originalname);
 }
});
// Create a multer instance with the storage strategy
const upload = multer({ storage: storage });
// Route to handle single file upload
app.post('/uploadSingle', upload.single('singleFile'), (req, res) => {
 // The uploaded file is available in req.file
 res.json({ message: 'Single file uploaded successfully!' });
});
// Route to handle multiple file uploads from a single field
app.post('/uploadMultipleSingleField', upload.array('multipleFiles', 5), (req, res) => {
 // The uploaded files are available in req.files
 res.json({ message: 'Multiple files from a single field uploaded successfully!' });
});
// Route to handle multiple file uploads from multiple fields
app.post('/uploadMultipleFields', upload.fields([
 { name: 'field1Files', maxCount: 5 },
 { name: 'field2Files', maxCount: 5 }
]), (req, res) => {
 // The uploaded files are available in req.files
 // Use req.files['field1Files'] for files from the first field
 // Use req.files['field2Files'] for files from the second field
 res.json({ message: 'Multiple files from multiple fields uploaded successfully!' });
});
// Start the server
app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});