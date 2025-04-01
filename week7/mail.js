// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//  service: 'gmail',
//  host: 'smtp.gmail.com',
//  port: 465,
//  secure: true,
//  auth: {
//   user: 'dummy257@gmail.com',
//   password: 'ezohpsrlhaggmonh',
//  },
// });

// const sendEmail = (email, token) => {
//  const mailOptions = {
//   from: 'dummy257@gmail.com',
//   to: 'dinuamipara611@gmail.com',
//   subject: 'Email verification',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log('Error in sending email  ' + error);
//     return true;
//   } else {
//    console.log('Email sent: ' + info.response);
//    return false;
//   }
//  });
// };

// module.exports = sendEmail;
// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true, // use SSL
  auth: {
    user: 'dummy257@gmail.com',
    pass: 'ezohpsrlhaggmonh',
  }
});

// Configure the mailoptions object
const mailOptions = {
  from: 'dummy257@gmail.com',
  to: 'dinuamipara611@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});