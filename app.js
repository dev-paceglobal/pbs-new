// app.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
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
        res.send('Email sent successfully!');
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
        res.redirect('/mobile-application');
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

// Start the server
// const PORT = process.env.PORT || 3000;

app.use('/', routes);
app.listen(3000)