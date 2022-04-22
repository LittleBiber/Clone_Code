import Dotenv from "dotenv";
Dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router.js";

const app = express();

app.use(
  cors({
    origin: [`${process.env.CLIENT_URI}`],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.get("/", (req, res) => {
  res.send(`Clone Code Server`);
});

app.use(function (req, res) {
  res.status(404).send("Not Found");
});

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () =>
  console.log(`Server runnning on port ${SERVER_PORT}`)
);
