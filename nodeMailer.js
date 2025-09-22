const NodeMailer=require("nodemailer"); 

const transporter = NodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use true for port 465, false for 587
  auth: {
    user: "campuspulse.life@gmail.com",
    pass: "umze exeo bqat mfkt" // your Gmail App Password
  }
});
const sendMail=({to,subject,text})=>{
const mailoptions= {
    from:'campuspulse.life@gmail.com',
    to,
    subject, 
    text
};
transporter.sendMail(mailoptions, (error, info) => {
  if (error) {
    console.error("❌ Email failed:", error);
  } else {
    console.log("✅ Email sent:");
  }
});



}

module.exports=sendMail; 
