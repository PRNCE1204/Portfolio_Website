const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for development, adjust as needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Status route
app.get('/api/status', (req, res) => {
  res.json({ status: 'active', message: 'Portfolio backend server is running successfully.' });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Simple validation
  if (!firstName || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields: First Name, Email, and Message.' 
    });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address.' 
    });
  }

  const senderName = lastName ? `${firstName} ${lastName}` : firstName;

  // Configure transporter using SMTP credentials from environment variables
  // Recommended: Use Gmail with an App Password (not standard account password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || 'tandelprince2006@gmail.com',
      pass: process.env.EMAIL_PASS // Gmail App Password
    }
  });

  // Compose HTML message body
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
      <div style="text-align: center; border-bottom: 2px solid #ff2a2a; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #ff2a2a; margin: 0; text-transform: uppercase; font-size: 20px; tracking-widest: 1px;">New Portfolio Message</h2>
        <p style="color: #6b7280; font-size: 13px; margin: 5px 0 0 0;">Received from your personal developer portfolio website</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #374151;">Sender Name:</td>
          <td style="padding: 8px 0; color: #4b5563;">${senderName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151;">Sender Email:</td>
          <td style="padding: 8px 0; color: #4b5563;"><a href="mailto:${email}" style="color: #ff2a2a; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #374151;">Received At:</td>
          <td style="padding: 8px 0; color: #4b5563;">${new Date().toLocaleString('en-US', { timeZoneName: 'short' })}</td>
        </tr>
      </table>

      <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #ff2a2a; margin-top: 10px;">
        <h4 style="margin: 0 0 10px 0; color: #374151; font-size: 14px;">Message Content:</h4>
        <p style="margin: 0; line-height: 1.6; color: #4b5563; font-size: 14px; white-space: pre-wrap;">${message}</p>
      </div>

      <div style="margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 11px; color: #9ca3af;">
        This email was generated automatically by your portfolio server backend.
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'tandelprince2006@gmail.com'}>`,
    to: process.env.RECEIVER_EMAIL || 'tandelprince2006@gmail.com',
    replyTo: email,
    subject: `📩 New Message from ${senderName} via Portfolio`,
    text: `New contact message from ${senderName} (${email}):\n\n${message}`,
    html: htmlContent
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully. Prince will get back to you shortly!' 
    });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send your message. Server encountered an error sending email notifications.',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running successfully on port ${PORT}`);
});
