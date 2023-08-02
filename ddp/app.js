// 테스트 123
const express = require("express");
// 클라이언트 요청정보얻기
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// .env로 키관리
const dotenv = require("dotenv");
const path = require("path");
// 이미지처리 라이브러리
const multer = require("multer");
// 파일처리
const fs = require("fs");
const router = require("./router/router");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
// 정적파일 path처리
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    httpOnly: true, // http 통신일때 허용
    secret: "secretkey", // 암호화 키
    resave: false, // 요청이 들어왔을 때 세션의 수정사항이 없더라도 다시저장
  })
);
app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번시작");
});
