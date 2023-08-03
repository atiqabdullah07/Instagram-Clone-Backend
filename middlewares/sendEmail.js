const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transpoter = nodeMailer.createTransport({});

  const mailOptions = {
    from: "",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transpoter.sendMail(mailOptions);
};
