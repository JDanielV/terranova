const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");
const express = require("express");
const config = require("./config");

const app = express();

//Middleware here
// app.use(express.json());

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

app.post("/api", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `Somebody sent you a new message from Terranova Website. Please find message details below. \n \nName: ${name} \n Email: ${email} \n Message:\n ${message}`;

  let mail = {
    from: name,
    to: "j.danielv@outlook.com",
    subject: "New Message - Terranova Website",
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

exports.api = functions.https.onRequest(app);
