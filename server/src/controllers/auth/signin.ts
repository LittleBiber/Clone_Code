import { Request, Response } from "express";
import { findOne } from "../db/dbController";
import * as bcrypt from "bcryptjs";
import { fail } from "assert";
import jwt from "jsonwebtoken";
require("dotenv").config();

export = async (req: Request, res: Response) => {
  // 입력 데이터에는 뭐가 있지
  // email, password
  const { email, password } = req.body;
  const found = findOne(email);

  if (!found) {
    return res
      .status(401)
      .send({ result: fail, message: "이메일 혹은 비밀번호를 확인하세요" });
  }

  if (!bcrypt.compareSync(password, found.password)) {
    return res
      .status(400)
      .send({ result: fail, message: "이메일 혹은 비밀번호를 확인하세요" });
  }

  delete found.password;
  const token = jwt.sign({ email }, String(process.env.JWT_SECRET), {
    expiresIn: "20h",
  });

  res.cookie("jwt", token, { maxAge: 30000 });
  res.status(200).send({ result: "success", data: found });
};
