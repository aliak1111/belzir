const nodemailer = require("nodemailer");
require("dotenv").config();

const sendVerificationEmail = async (email, verificationCode) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Email",
        text: `Use this code to verify your email: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
