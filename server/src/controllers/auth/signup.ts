import { Request, Response } from "express";
import { readDB, writeDB, findOne } from "../db/dbController";
import * as bcrypt from "bcryptjs";

export = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const found = findOne(email);

  if (found) {
    return res
      .status(400)
      .send({ result: false, message: "이미 가입한 이메일입니다" });
  }

  const secret = await bcrypt.genSalt(10);
  const hashedPW = bcrypt.hashSync(password, secret);

  const userInfo = req.body;
  userInfo.password = hashedPW;

  writeDB(userInfo);

  delete userInfo.password;

  res.send(userInfo);
};

/*
기업 회원가입
  - 기업명(필/입력), 산업군(필/목록), 그룹원 수(필/목록), 사용 목적(선/목록) 사업자등록번호
  - 이름 이메일 비밀번호(영-수-특 8-32)

개인 회원가입
  - OAuth는 후순위로두고 먼저 이메일가입과 프론트에 집중하기
  - 이름 이메일 비밀번호

공통 사항
  - 생성시간 new Date().toLocaleString('ko-KR') 으로 기록
*/
