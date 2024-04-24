
// express 모듈을 불러옵니다.
const express = require("express");
// 웹 서버가 사용할 포트 번호를 정의합니다.
const port = 3000;
const app = express();
const path = require('path');
/**
* 루트 경로('/')에 대한 GET 요청을 처리
* 요청이 오면 'Hello World!' 문자열을 응답
*/
// req = request(요청), res = response(응답)


app.get('/css/login.css', function(req, res) {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/css/login.css');
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '/html/login.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});