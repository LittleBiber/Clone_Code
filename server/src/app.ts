import express, { Request, Response, NextFunction } from "express";
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router.ts");
import morgan from "morgan";
import { readDB } from "./controllers/db/dbController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["*"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());
app.use(morgan("dev"));

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server");
});

app.listen(8000, () => {
  console.log("server running");
});
