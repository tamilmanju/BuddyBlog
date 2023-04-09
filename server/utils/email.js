const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  // if we don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create transporter
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "mail.msmobilecrane.com",
    port: 587,
    secure: false,
    auth: {
      user: "support@msmobilecrane.com",
      pass: "d.4z&F;[4?IE",
    },
  });

  //   const transporter = nodemailer.createTransport({
  //     port: 25, // Postfix uses port 25
  //     host: "localhost",
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  //mail options
  const mailOptions = {
    from: "t.tamilagathiyan666@gmail.com",
    to: "t.tamilagathiyan666@gmail.com",
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
