let lastScroll = 0;
const indexCont2 = document.querySelector("#container .cont2");
const indexCont3 = document.querySelector("#container .cont3");
const indexCont4 = document.querySelector("#container .cont4");
const cont3Video = document.querySelector(".cont3 video");
let cont2Top = indexCont2.offsetTop;
let cont3Top = indexCont3.offsetTop;
let cont4Top = indexCont4.offsetTop;

const backToTop = document.querySelector(".backToTop");


let isTrue = true;

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop === 0) {
        // 스크롤이 맨위일때 헤더변경
        logo.setAttribute("src","/img/index/logo.png");
        header.classList.add("top");
        header.classList.remove("up");
        header.classList.remove("down");
    } else if(scrollTop > lastScroll) {
        // 스크롤 내릴때 헤더변경
        logo.setAttribute("src","/img/index/logo.png");
        header.classList.add("down");
        header.classList.remove("up");
        header.classList.remove("top");
    } else {
        // 스크롤 올릴때 헤더변경
        logo.setAttribute("src","/img/index/logo_black.png");
        header.classList.add("up");
        header.classList.remove("down");
        header.classList.remove("top");
    }
    lastScroll = scrollTop;

    // backtotop 버튼 등장 & 기능
    if(scrollTop > cont2Top) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

    backToTop.addEventListener("click",(e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
    })

    // cont3 비디오 기능..
    // if(scrollTop > cont3Top){
    //     if(isTrue){
    //         console.log("멈춰");
    //     }       
    // }
}

 



// 스크롤화살표 움직이기(공통)
const scrollWrap = document.querySelector(".scrollWrap");
setInterval(()=>{
    scrollWrap.classList.toggle("move");
},1000);
