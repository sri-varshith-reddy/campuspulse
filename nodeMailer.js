// sendMail.js
const nodemailer = require("nodemailer");

// Setup transporter with SendGrid SMTP (hardcoded)
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // TLS
  auth: {
    user: "apikey", // literally "apikey"
    pass: "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" // hardcoded SendGrid API key
  }
});

/**
 * Send an email dynamically
 * @param {Object} param0
 * @param {string} param0.to - Recipient email
 * @param {string} param0.subject - Email subject
 * @param {string} param0.text - Plain text content
 */
const sendMail = ({ to, subject, text }) => {
  const mailOptions = {
    from: "campuspulse.life@gmail.com", // must match verified sender in SendGrid
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`❌ Email failed to ${to}:`, error);
    } else {
      console.log(`✅ Email sent to ${to}:`, info.response);
    }
  });
};

module.exports = sendMail;
