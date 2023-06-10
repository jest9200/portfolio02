const header = document.querySelector("#header");
const botHeader = document.querySelector("#header .botHeader");
const logo = document.querySelector("#header .logo img");
const gnbMenus = document.querySelectorAll("#header .gnb > li");
const gnbLinks = document.querySelectorAll("#header .gnb > li > a");
const depth2 = document.querySelector("#header .depth2");
const bgHeader = document.querySelector("#header .bg");

// 헤더 마우스엔터/리브 기능
for(let i=0; i<gnbMenus.length; i++){
    gnbMenus[i].onmouseenter = () => {
        logo.setAttribute("src","/img/index/logo_black.png");

        header.classList.add("white");
    }
}

for(let i=0; i<gnbMenus.length; i++){
    gnbMenus[i].onmouseleave = () => {

        if(window.scrollY === 0) {
            logo.setAttribute("src","/img/index/logo.png");
        } else {
            logo.setAttribute("src","/img/index/logo_black.png");
        }

        header.classList.remove("white");
    }
}

gnbMenus[0].onmouseenter = () => {
    logo.setAttribute("src","/img/index/logo_black.png");
    header.classList.add("white");
    depth2.style.height = "300px";
    bgHeader.style.height = "300px";
}
gnbMenus[0].onmouseleave = () => {
    if(window.scrollY === 0) {
        logo.setAttribute("src","/img/index/logo.png");
    } else {
        logo.setAttribute("src","/img/index/logo_black.png");
    }
    header.classList.remove("white");
    depth2.style.height = "0px";
    bgHeader.style.height = "0px";
}

// 모바일 메뉴 클릭시
const hamMenu = document.querySelector("#header .hamMenu");
const closeBtnH = document.querySelector("#header .mobileMenu .closeBtn");
const mobileMenu = document.querySelector("#header .mobileMenu");
const mGnb = document.querySelector("#header .gnbMenu li:first-child");
const mGnbLink = document.querySelector("#header .gnbMenu li:first-child > a");

hamMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    mobileMenu.style.right = "0px";
});

closeBtnH.addEventListener("click",(e)=>{
    e.preventDefault();
    mobileMenu.style.right = "-351px";
});

mGnbLink.addEventListener("click",(e)=>{
    e.preventDefault();
    mGnb.classList.toggle("on");
})


