import Dotenv from "dotenv";
Dotenv.config();
import jwt from "jsonwebtoken";

const TokenFunction = {
  setToken: async (res, data) => {
    const token = jwt.sign(data, String(process.env.JWT_SECRET), {
      expiresIn: "20h",
    });

    console.log(token);

    res.cookie("jwt", token, {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    });
  },
  testToken: (token) => {
    console.log(token);

    if (!token) return null;

    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.log("AccessToken ERROR");
      return null;
    }
  },
};

export default TokenFunction;
