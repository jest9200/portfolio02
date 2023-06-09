let lastScroll = 0;
const indexCont2 = document.querySelector("#container .cont2");
const indexCont3 = document.querySelector("#container .cont3");
const indexCont4 = document.querySelector("#container .cont4");
const cont3Video = document.querySelector(".cont3 video");
let cont2Top = indexCont2.offsetTop;
let cont3Top = indexCont3.offsetTop;
let cont4Top = indexCont4.offsetTop;

const backToTop = document.querySelector(".backToTop");


// 반응형에 따른 헤더메뉴 변화 적용
const tablet = matchMedia("screen and (max-width:1200px)");
const loginWrap = document.querySelector("#header .loginWrap");
const loginLink = document.querySelectorAll("#header .loginWrap a");

resizeClass();
window.addEventListener("resize",()=>{
    resizeClass();
});
function resizeClass(){
    if(tablet.matches){
        headerShort();
        botHeader.style.display = "none";
        loginWrap.style.display = "none";
        hamMenu.style.display = "block";
    } else {
        headerLong();
        botHeader.style.display = "flex";
        loginWrap.style.display = "flex";
        hamMenu.style.display = "none";
    }
}


function headerLong(){
    window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop === 0) {
            // 스크롤이 맨위일때 헤더변경
            logo.setAttribute("src", "/img/index/logo.png");
            header.classList.add("top");
            header.classList.remove("up");
            header.classList.remove("down");
            header.classList.remove("mtop");
            header.classList.remove("mup");
            header.classList.remove("mdown");
            botHeader.style.display = "flex";
            loginWrap.style.display = "flex";
            hamMenu.style.display = "none";
        } else if (scrollTop > lastScroll) {
            // 스크롤 내릴때 헤더변경
            logo.setAttribute("src", "/img/index/logo.png");
            header.classList.add("down");
            header.classList.remove("up");
            header.classList.remove("top");
            header.classList.remove("mtop");
            header.classList.remove("mup");
            header.classList.remove("mdown");
            botHeader.style.display = "none";
            loginWrap.style.display = "none";
            hamMenu.style.display = "none";
        } else {
            // 스크롤 올릴때 헤더변경
            logo.setAttribute("src", "/img/index/logo_black.png");
            header.classList.add("up");
            header.classList.remove("down");
            header.classList.remove("top");
            header.classList.remove("mtop");
            header.classList.remove("mup");
            header.classList.remove("mdown");
            botHeader.style.display = "flex";
            loginWrap.style.display = "flex";
            hamMenu.style.display = "none";
        }
        lastScroll = scrollTop;
    
        // backtotop 버튼 등장 & 기능
        if (scrollTop > cont2Top) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    
        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }    
}

function headerShort(){
    window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop === 0) {
            // 스크롤이 맨위일때 헤더변경
            logo.setAttribute("src", "/img/index/logo.png");
            header.classList.add("mtop");
            header.classList.remove("mup");
            header.classList.remove("mdown");
            header.classList.remove("top");
            header.classList.remove("up");
            header.classList.remove("down");
            botHeader.style.display = "none";
            loginWrap.style.display = "none";
            hamMenu.style.display = "block";
        } else if (scrollTop > lastScroll) {
            // 스크롤 내릴때 헤더변경
            logo.setAttribute("src", "/img/index/logo.png");
            header.classList.add("mdown");
            header.classList.remove("mup");
            header.classList.remove("mtop");
            header.classList.remove("top");
            header.classList.remove("up");
            header.classList.remove("down");
            botHeader.style.display = "none";
            loginWrap.style.display = "none";
            hamMenu.style.display = "none";
        } else {
            // 스크롤 올릴때 헤더변경
            logo.setAttribute("src", "/img/index/logo_black.png");
            header.classList.add("mup");
            header.classList.remove("mdown");
            header.classList.remove("mtop");
            header.classList.remove("top");
            header.classList.remove("up");
            header.classList.remove("down");
            botHeader.style.display = "none";
            loginWrap.style.display = "none";
            hamMenu.style.display = "block";
        }
        lastScroll = scrollTop;
    
        // backtotop 버튼 등장 & 기능
        if (scrollTop > cont2Top) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    
        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}




// 스크롤화살표 움직이기(공통)
const scrollWrap = document.querySelector(".scrollWrap");
setInterval(() => {
    scrollWrap.classList.toggle("move");
}, 1000);
