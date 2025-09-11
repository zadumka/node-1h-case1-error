import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({

  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,

    pass: process.env.SMTP_PASS,
  },
});


export const sendEmail = async function (options) {
  return await this.transporter.sendMail(options);
};
