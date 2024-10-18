// app.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const flash = require('express-flash');
const session = require('express-session');

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());
const routes = require('./routes/routes');
// Middleware to serve static files (for HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, email, budget, message } = req.body;


    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     secure: true,
    //     port: 465,
    //     auth: {
    //         user: process.env.SMTP_EMAIL,
    //         pass: process.env.SMTP_PASSWORD,
    //     },
    // });

    // const mailOptions = {
    //     from: process.env.SMTP_EMAIL,
    //     to: process.env.SMTP_MYEMAIL,
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_MYEMAIL,
        subject: `New Message from ${name}`,
        html: `
            <h3>New Contact Request</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Budget:</strong> ${budget || 'Not provided'}</li>
            </ul>
            <h4>Message:</h4>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.redirect('/book-publications');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});
app.post('/send-email-package', async (req, res) => {
    const { name, email, budget, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_MYEMAIL,
        subject: `New Message from ${name}`,
        html: `
            <h3>New Contact Request</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Budget:</strong> ${budget || 'Not provided'}</li>
            </ul>
            <h4>Message:</h4>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        req.flash('success', 'Email sent successfully!');
        res.redirect('/mobile-application');
      

    } catch (error) {
        req.flash('error', 'Failed to send email');
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});
app.post('/send-email-steps', async (req, res) => {
    const { cname, slogan, industry, keyword, cemail, cnumber } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_MYEMAIL,
        subject: `New Message from ${cname}`,
        html: `
            <h3>New Contact Request</h3>
            <ul>
              <li><strong>Company Name:</strong> ${cname}</li>
              <li><strong>Slogan:</strong> ${slogan}</li>
              <li><strong>Industry:</strong> ${industry}</li>
              <li><strong>Keyword:</strong> ${keyword}</li>
              <li><strong>Company Email:</strong> ${cemail}</li>
              <li><strong>Company Number:</strong> ${cnumber || 'Not provided'}</li>
            </ul>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        req.flash('success', 'Email sent successfully!');
        res.redirect('/step-7');
    } catch (error) {
        req.flash('error', 'Failed to send email');
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

// Start the server
// const PORT = process.env.PORT || 3000;

app.use('/', routes);
app.listen(3000)