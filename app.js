// commonjs 문법, import 대신
const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

// req: 클라->서버, res: 서버->클라 응답
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 시작 명령어(포트번호, 콜백함수=처리 내용)
app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});

//get은 READ=조회, post는 CREATE=생성, put(or patch)은 UPDATE=전체변경(부분변경) , delete는 DELETE=삭제

// 고칠때마다 node app.js하는 것을 막기 위해 npm i nodemon 설치
// 이후 package.json 에 script에 "dev": "nodemon app.js" 적기
