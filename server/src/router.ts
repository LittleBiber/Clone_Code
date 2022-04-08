import express, { Request, Response } from "express";
const router = express.Router(); // 대문자 Router여야 함 조심!
import SignUp from "./controllers/auth/signup";
import SignIn from "./controllers/auth/signin";

// 회원가입
router.post("/auth/signup", (req: Request, res: Response) => SignUp(req, res));
router.post("/auth/signin", (req: Request, res: Response) => SignIn(req, res));

export = router;
