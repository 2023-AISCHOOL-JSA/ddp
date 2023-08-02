const express = require("express");
const router = express.Router();

// 쿠키: 저장공간을 클라이언트로 이용해서 데이터를 관리하는 기술
// 쿠키 생성
router.get("/", (req, res) => {
  console.log("기본경로");
});
router.get("/login", (req, res) => {
  console.log("로그인");
});

module.exports = router;
