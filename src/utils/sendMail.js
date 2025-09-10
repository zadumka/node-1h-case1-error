import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
 
  port: 587,
  auth: {
  
    pass: process.env.SMTP_PASSWORD,
  },
});


export const sendEmail = (options) => {
  return transporter.sendMail(options);
};
