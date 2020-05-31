// mailer file
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({});

var mailOptions = {};

transporter.sendMail(mailOptions, function(error, info){});