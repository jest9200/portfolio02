const express = require("express");
const multer  = require('multer'); // 파일업로드 기능 multer 불러오기
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

// ejs 파일형식을 node.js에서 사용하기위한 시작구문(최초 한번)
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// img,css,js 등의 정적파일들을 ejs파일내에서 사용하기위함
app.use(express.static('public'));



let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

MongoClient.connect("mongodb+srv://jest9200:wjdtmdgur92@cluster0.iggxwpy.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("portfolio02");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });

});

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

app.get("/product/oled_8k",(req,res)=>{
    res.render("prd_oled8k.ejs")
})

app.get("/product/refrigerator",(req,res)=>{
    res.render("prd_refrigerator.ejs")
})

app.get("/product/wine_cellar",(req,res)=>{
    res.render("prd_winecellar.ejs")
})

app.get("/product/washing_machine",(req,res)=>{
    res.render("prd_washingmachine.ejs")
})

app.get("/product/air_purifier",(req,res)=>{
    res.render("prd_airpurifier.ejs")
})


// 게시판 news 목록페이지 (페이징 추가할것)
app.get("/notice/news/list",(req,res)=>{
    db.collection("news_board").find().toArray((err,result)=>{
        res.render("news_list.ejs",{data:result});
    })
})

app.get("/notice/news/insert",(req,res)=>{
    res.render("news_insert.ejs");
})



// 회원가입 & 로그인
app.get("/join", (req, res) => {
    res.render("join.ejs");
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})



