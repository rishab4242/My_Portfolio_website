require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test route
app.get("/api/test", (req, res) => {
  res.send("✅ SendGrid email backend is working");
});

// Email sending route
app.post("/api/send-email", async (req, res) => {
  const { to, subject, body, userEmail } = req.body;

  if (!to || !subject || !body || !userEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const msg = {
    to, // recipient
    from: process.env.GMAIL_USER, // must be verified in SendGrid
    subject,
    text: `User Email: ${userEmail}\n\n${body}`,
    replyTo: userEmail,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully to:", to);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(
      "SendGrid Error:",
      error.response ? error.response.body : error
    );
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
