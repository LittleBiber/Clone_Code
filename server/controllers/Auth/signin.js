import Dotenv from "dotenv";
Dotenv.config();

import bcrypt from "bcryptjs";
import { findOne } from "../DB/index.js";
import TokenFunction from "../Token/index.js";

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ result: "fail", message: "empty_email_or_password" });

  const personal = findOne("personal", email);
  const enterprise = findOne("enterprise", email);

  // 개인계정 우선으로 사용하고 없으면 기업계정에서 찾은 데이터 사용
  const found = personal ? personal : enterprise;

  // 기업계정도 없으면 에러 반환
  if (!found)
    return res.status(400).json({
      result: "fail",
      message: "not_signed_up",
    });

  // 비동기로 비밀번호 확인
  if (!bcrypt.compareSync(password, found.password))
    return res.status(400).json({ result: "fail", message: "check_password" });

  delete found.password;

  await TokenFunction.setToken(res, found);
  res.status(200).send({ result: "success", data: found });
};

export default signin;
