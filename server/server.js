const nodemailer = require("nodemailer");
const express = require("express");
const config = require("./config");
const cors = require("cors");

const app = express();

//Middleware here
app.use(express.json());
app.use(cors());

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages.");
  }
});

app.post("/send", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `Somebody sent you a new message from Terranova Website. Please find message details below. \n \nName: ${name} \n Email: ${email} \n Message:\n ${message}`;

  let mail = {
    from: name,
    to: "j.danielv@outlook.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "Server error - message not sent",
      });
    } else {
      res.json({
        msg: "Success - message sent",
      });
    }
  });
});

app.listen(5000, () => {
  console.log("Server is live on port 5000");
});
