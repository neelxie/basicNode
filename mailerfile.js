// mailer file
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@yourprovider.com',
      pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@provider.com',
    to: 'myfriend@provider.com', 'otherperson@provider.com',
    subject: 'Sending you Email using Node.js',
    //text: 'That was easy!' 
    // you  can use either text above or html below
    html: '<h1>Welcome</h1><p>To the emanant Revolution!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    // You could do more here than just console log
    if (error) {
        // incase of an error display it
        console.log(error);
    } else {
        console.log('Email has been sent: ' + info.response);
    }    
});
