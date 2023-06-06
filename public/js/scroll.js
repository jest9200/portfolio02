let lastScroll = 0;
const indexCont3 = document.querySelector("#container .cont3");
const indexCont4 = document.querySelector("#container .cont4");
const cont3Video = document.querySelector(".cont3 video");
let cont3Top = indexCont3.offsetTop;
let cont4Top = indexCont4.offsetTop;


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

    // index cont3 비디오 기능
    // if(scrollTop > cont3Top && scrollTop < cont4Top){
    //     cont3Video.play();
    // } else {
    //     cont3Video.pause();
    // }
}



// 스크롤화살표 움직이기(공통)
const scrollWrap = document.querySelector(".scrollWrap");
setInterval(()=>{
    scrollWrap.classList.toggle("move");
},1000);
