import Dotenv from "dotenv";
Dotenv.config();
import { writeDB, findOne } from "../DB/index.js";
import bcrypt from "bcryptjs";
import TokenFunction from "../Token/index.js";
import Mailer from "../Mail/index.js";

const temp = {};
const dbList = {
  0: "personal",
  1: "enterprise",
};

const signup = {
  postUserData: async (req, res) => {
    const { type } = req.query;

    // const dbList = {
    //   0: "personal",
    //   1: "enterprise",
    // };

    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) return res.sendStatus(400);

      // const found = findOne(dbList[type], email);
      const tmp1 = findOne("personal", email);
      const tmp2 = findOne("enterprise", email);

      const found = tmp1 ? tmp1 : tmp2;

      if (found) return res.sendStatus(409);

      const salt = bcrypt.genSaltSync(10);
      const hashedPW = bcrypt.hashSync(password, salt);

      const id = Math.random().toString(36).slice(2);

      temp[id] = {
        ...req.body,
        password: hashedPW,
      };

      temp[id].timeout = setTimeout(() => {
        delete temp[id];
        console.log(`${id} 시간 초과로 삭제됨`);
      }, 1800000);

      temp[id].verified = (id) => clearTimeout(temp[id].timeout);

      const link = `http://localhost:8000/auth/verify/${id}?email=${email}&type=${type}`;

      Mailer.sendVerifyMail(email, link);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  verifyEmail: async (req, res) => {
    const { id } = req.params;
    const { email, type } = req.query;

    try {
      // 값이 제대로 전달되지 않았을 때를 필터
      if (!id || !email || !type) return res.sendStatus(400);

      // 저장된 데이터 찾기
      const userData = temp[id];

      // 데이터 없는 경우를 필터
      if (!userData) return res.sendStatus(404);

      // 삭제 타이머 제거
      userData.verified(id);
      delete userData.timeout;
      delete userData.verified;

      // 데이터 DB에 저장하기 (이 부분은 개인/기업 상관없이 동작 가능)
      const result = await writeDB(dbList[type], userData);

      // 가입성공 메일 발송
      Mailer.sendWelcomeMail(email, result.name);

      // JWT에는 비밀번호가 제외되어야 함
      delete result.password;

      // 데이터를 가지고 JWT생성 및 쿠키에 저장
      TokenFunction.setToken(res, result);

      // 마이페이지가 없으므로 pricing으로 리다이렉트
      res.status(200).redirect("http://localhost:3000/pricing");
    } catch (err) {
      // 500이 아니라 시간초과 페이지로 리다이렉트해야 함
      return res.sendStatus(500);
    }
  },
};

export default signup;
