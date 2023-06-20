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

// 로그인 회원가입 위한 설정
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


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


//파일 첨부후 서버에 전달 할 때 multer library 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload') //업로드 폴더 지정
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8'))
      //영어가 아닌 다른 파일명 안깨지고 나오게 처리
    }
  })
  
const upload = multer({ storage: storage })
//upload는 위의 설정사항을 담은 변수(상수) 


// 로그인 시 검증 처리
passport.use(new LocalStrategy({
    usernameField: "memberid",
    passwordField: "memberpass",
    session: true,
},      //해당 name값은 아래 매개변수에 저장
    function (memberid, memberpass, done) {
        //회원정보 콜렉션에 저장된 아이디랑 입력한 아이디랑 같은지 체크                                 
        db.collection("members").findOne({ memberid: memberid }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            //비밀번호 체크 여기서 user는 db에 저장된 아이디의 비번값
            if (memberpass == user.memberpass) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        });
    }
));

//처음 로그인 했을 시 세션 생성 memberid는 데이터에 베이스에 로그인된 아이디
passport.serializeUser(function (user, done) {
    done(null, user.memberid)
});

//다른 페이지(서브페이지,게시판 페이지 등 로그인 상태를 계속 표기하기 위한 작업)
//로그인이 되있는 상태인지 체크
passport.deserializeUser(function (memberid, done) {
    db.collection('members').findOne({ memberid: memberid }, function (err, result) {
        done(null, result);
    })
});



// 라우터 세팅 (요청,응답)
// 메인페이지 주소로 요청하면 메인페이지 접속완료라고 하는 메세지를 응답해준다

// 터미널 화면에서 부가 기능 중 nodemon을 설치해서 가면
// index.js 중간 수정해도 수정사항 반영해서 보여줌
app.get("/",(req,res)=>{
    res.render("index.ejs",{login:req.user})
})

app.get("/brand",(req,res)=>{
    res.render("brand.ejs",{login:req.user})
})

app.get("/magazine",(req,res)=>{
    res.render("magazine.ejs",{login:req.user})
})

app.get("/lounge",(req,res)=>{
    res.render("lounge.ejs",{login:req.user})
})

app.get("/inspiration",(req,res)=>{
    res.render("inspiration.ejs",{login:req.user})
})

app.get("/product/oled_8k",(req,res)=>{
    res.render("prd_oled8k.ejs",{login:req.user})
})

app.get("/product/refrigerator",(req,res)=>{
    res.render("prd_refrigerator.ejs",{login:req.user})
})

app.get("/product/wine_cellar",(req,res)=>{
    res.render("prd_winecellar.ejs",{login:req.user})
})

app.get("/product/washing_machine",(req,res)=>{
    res.render("prd_washingmachine.ejs",{login:req.user})
})

app.get("/product/air_purifier",(req,res)=>{
    res.render("prd_airpurifier.ejs",{login:req.user})
})


// 게시판 review 목록페이지 (페이징 추가할것)
app.get("/notice/review/list",(req,res)=>{
    db.collection("review").find().toArray((err,result)=>{
        res.render("review_list.ejs",{data:result,login:req.user});
    })
})

app.get("/notice/review/insert",(req,res)=>{
    res.render("review_insert.ejs",{login:req.user});
})



// 회원가입
app.get("/join", (req, res) => {
    res.render("join.ejs",{login:req.user});
})

app.post("/joindb",(req,res)=>{
    db.collection("members").findOne({memberid:req.body.memberid},(err,member)=>{
        if(member) {
            res.send("<script> alert('이미 가입된 아이디입니다.'); location.href='/join'; </script>")
        } else {
            db.collection("count").findOne({name:"회원"},(err,result)=>{
                db.collection("members").insertOne({
                    memberno: result.memberCount,
                    memberid: req.body.memberid,
                    memberpass: req.body.memberpass,
                    membername: req.body.membername,
                    memberbirth: req.body.memberbirth,
                    memberemail: req.body.memberemail,
                    memberphone: req.body.memberphone
                },(err)=>{
                    db.collection("count").updateOne({name:"회원"},{$inc:{memberCount:1}},(err)=>{
                        res.send("<script> alert('회원가입 완료'); location.href='/login' </script>")
                    })
                })
            })
        }
    })
})

// 로그인
app.get("/login", (req, res) => {
    res.render("login.ejs",{login:req.user});
})

app.post("/logincheck",passport.authenticate('local', { failureRedirect: '/login'}),(req,res)=>{
    res.redirect("/"); //로그인 성공시 메인페이지로 이동
})


// 로그아웃
app.get("/logout",(req,res)=>{
    req.logout(()=>{
        res.redirect("/");
    })
})

// 마이페이지
app.get("/mypage",(req,res)=>{
    res.render("mypage.ejs",{login:req.user})
})

app.post("/myupdate",(req,res)=>{
    if(req.body.originPass === req.user.memberpass) {
        db.collection("members").updateOne({memberid:req.user.memberid},{$set:{memberpass:req.body.changePass}},(err)=>{
            res.redirect("/");
        })
    } else {
        res.send("<script> alert('It does not match the existing password.'); location.href = '/mypage' </script>")
    }
})


// 로그인페이지에서 경고창띄우기위해 axios 사용 
app.post("/user",(req,res)=>{
    db.collection("members").findOne({memberid:req.body.memberid,memberpass:req.body.memberpass},(err,result)=>{
        if(result === null) {
            res.send(result);
        } 
    })
});
