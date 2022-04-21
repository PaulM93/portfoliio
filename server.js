const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const validateEmail = (email) => {
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (email.length > 254) return false;

  const valid = emailRegex.test(email);
  if (!valid) return false;

  // Further checking of some things regex can't handle
  const parts = email.split("@");
  if (parts[0].length > 64) return false;

  const domainParts = parts[1].split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
};

app.post("/send-email", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  //Email Val
  const emailVal = validateEmail(email);
  console.log("Email Val", emailVal);

  if (emailVal) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_ACCOUNT,
        pass: process.env.NODEMAILER_PASSWORD, //env
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_ACCOUNT,
      subject: `New portfolio email from ${name} : ${email}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "There was a problem :(", error: error });
      } else {
        return res
          .status(200)
          .json({ message: "I'll be in touch! Thank you :)" });
      }
    });
  } else {
    return res.status(400).json({ message: "Email badly formatted" });
  }
});

app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}`);
});
