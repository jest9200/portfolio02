const express = require("express")
const app = express()

// ejs 파일형식을 node.js에서 사용하기위한 시작구문(최초 한번)
app.set("view engine","ejs")

// img,css,js 등의 정적파일들을 ejs파일내에서 사용하기위함
app.use(express.static('public'))

const port = 3000

// 해당 사이드 서버에 접속시 성공일 경우 콘솔창 실행
app.listen(port,()=>{
    console.log("서버가 잘 실행되고 있습니다");
})

// 라우터 세팅 (요청,응답)
// 메인페이지 주소로 요청하면 메인페이지 접속완료라고 하는 메세지를 응답해준다

// 터미널 화면에서 부가 기능 중 nodemon을 설치해서 가면
// index.js 중간 수정해도 수정사항 반영해서 보여줌
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/brand",(req,res)=>{
    res.render("brand.ejs")
})

app.get("/magazine",(req,res)=>{
    res.render("magazine.ejs")
})

app.get("/lounge",(req,res)=>{
    res.render("lounge.ejs")
})

app.get("/inspiration",(req,res)=>{
    res.render("inspiration.ejs")
})
