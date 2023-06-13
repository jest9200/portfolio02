let lastScroll = 0;
const brandHeader = document.querySelector("#header");
const brandFooter = document.querySelector("#footer");
const brandCont2 = document.querySelector("#container .cont2");
const brandCont3 = document.querySelector("#container .cont3");
const brandCont4 = document.querySelector("#container .cont4");
const brandCont5 = document.querySelector("#container .cont5");
const brandCont6 = document.querySelector("#container .cont6");
const brandCont7 = document.querySelector("#container .cont7");
let cont2Top = brandCont2.offsetTop;

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

// 중간에 탭메뉴 헤더처럼

const brandTab = document.querySelector(".cont3 .tabWrap");
const brandTabLists = document.querySelectorAll(".cont3 .tabMenu li");
window.addEventListener("scroll",()=>{
    let bTop3 = brandCont3.offsetTop;
    let bTop4 = brandCont4.offsetTop;
    let bTop5 = brandCont5.offsetTop;
    let bTop6 = brandCont6.offsetTop;
    let bTop7 = brandCont7.offsetTop;

    let wTop = window.scrollY;
    if(wTop >= bTop3 && wTop < bTop7){
        brandHeader.style.display = "none";
        brandTab.classList.add("on");
        if(wTop >= bTop3 && wTop < bTop5){
            for(let i=0; i<brandTabLists.length; i++){
                brandTabLists[i].classList.remove("on");
            }
            brandTabLists[0].classList.add("on");
        } else if(wTop >= bTop5 && wTop < bTop6){
            for(let i=0; i<brandTabLists.length; i++){
                brandTabLists[i].classList.remove("on");
            }
            brandTabLists[1].classList.add("on");
        } else if(wTop >= bTop6 && wTop < bTop7){
            for(let i=0; i<brandTabLists.length; i++){
                brandTabLists[i].classList.remove("on");
            }
            brandTabLists[2].classList.add("on");
        }
    } else {
        brandHeader.style.display = "block";
        brandTab.classList.remove("on");
    }
});


// 반응형에 따른 헤더 변화 함수 선언
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

        // for(let i=0; i<viewWraps.length; i++){
        //     if(windowTop > viewWraps[i].offsetTop && windowTop < viewWraps[i+1].offsetTop) {
        //         for(let j=0; j<viewWraps.length; j++){
        //             viewWraps[j].classList.remove("on");
        //         }
        //         viewWraps[i].classList.add("on");
        //     }
        // }
        
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
