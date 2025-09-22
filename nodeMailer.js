// sendMail.js
const sgMail = require('@sendgrid/mail');

// Hardcoded SendGrid API key
sgMail.setApiKey('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');

/**
 * Send an email dynamically
 * @param {Object} param0
 * @param {string} param0.to - Recipient email
 * @param {string} param0.subject - Email subject
 * @param {string} param0.text - Plain text content
 * @param {string} [param0.html] - Optional HTML content
 */
const sendMail = async ({ to, subject, text, html }) => {
  const msg = {
    to,
    from: 'campuspulse.life@gmail.com', // verified sender
    subject,
    text,
    html
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Email failed to ${to}:`, error.response ? error.response.body : error);
  }
};

module.exports = sendMail;
