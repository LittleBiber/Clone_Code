import { Router } from "express";
const router = Router();
import controllers from "./controllers/index.js";

router.post("/auth/signup", controllers.signup.postUserData); // 인증 메일 요청
router.get("/auth/verify/:id", controllers.signup.verifyEmail); // 인증 메일 검증
router.post("/auth/signin", controllers.signin); // 로그인
router.get("/user", controllers.userdata); // 유저 정보 받기
router.get("/auth/signout", controllers.signout); // 로그아웃

export default router;
