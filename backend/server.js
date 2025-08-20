require("dotenv").config();

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded" : "Not Loaded");

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Test the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter connection error:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});

app.post("/api/send-email", async (req, res) => {
  const { to, subject, body, userEmail } = req.body; // Expect userEmail from frontend

  if (!to || !subject || !body || !userEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER, // Your email (rishabdakhale17@gmail.com)
    to: process.env.GMAIL_USER, // Your email (rishabdakhale17@gmail.com)
    subject: subject,
    text: `User Email: ${userEmail}\n\n${body}`, // Include user email in body
    replyTo: userEmail, // User's email for replying
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", to);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
