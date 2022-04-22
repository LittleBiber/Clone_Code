import nodemailer from "nodemailer";
import Dotenv from "dotenv";
import Templete from "./templete.js";
Dotenv.config();

const transport = nodemailer.createTransport({
  service: "gmail",
  prot: 587,
  host: "smtp.gmlail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
});

const Mailer = {
  sendVerifyMail: async (email, link) => {
    const message = {
      from: process.env.MAIL_EMAIL,
      to: email,
      subject: "[도뉴] 가입 인증 메일입니다.",
      html: Templete("verify", link),
    };

    await transport.sendMail(message);
    console.log("인증메일 발송");
  },
  sendWelcomeMail: async (email, name) => {
    try {
      const message = {
        from: process.env.MAIL_EMAIL,
        to: email,
        subject: "[도뉴] 회원가입이 완료되었습니다!.",
        html: Templete("welcome", name),
      };

      await transport.sendMail(message);
      console.log("환영메일 발송");
    } catch (err) {
      console.log(err);
    }
  },
};

export default Mailer;
