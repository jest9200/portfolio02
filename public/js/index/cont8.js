const tabMenuCont8 = document.querySelectorAll(".cont8 .tabMenu > li");
const imgsCont8 = document.querySelectorAll(".cont8 .imgWrap .center img");
const contentCont8 = document.querySelectorAll(".cont8 .wrapper .contentWrap");

// cont8 tabMenu
for(let i=0; i<tabMenuCont8.length; i++){
    tabMenuCont8[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<tabMenuCont8.length; j++){
            tabMenuCont8[j].classList.remove("show");
            imgsCont8[j].classList.remove("show");
            contentCont8[j].classList.remove("show");
        }
        tabMenuCont8[i].classList.add("show");
        imgsCont8[i].classList.add("show");
        contentCont8[i].classList.add("show");
    });
}

// + - 버튼 눌렀을때 높이 조절
const viewCont8 = document.querySelectorAll(".cont8 .viewMore");
const closeCont8 = document.querySelectorAll(".cont8 .viewClose");
const botWrapCont8 = document.querySelectorAll(".cont8 .botWrap");
const botWrapHeight = ["2190px","1053px","1165px"];

for(let i=0; i<viewCont8.length; i++){
    viewCont8[i].addEventListener("click",(e)=>{
        e.preventDefault();
        botWrapCont8[i].style.height = botWrapHeight[i];
        viewCont8[i].style.display = "none";
        closeCont8[i].style.display = "block";
    });

    closeCont8[i].addEventListener("click",(e)=>{
        e.preventDefault();
        botWrapCont8[i].style.height = 0;
        viewCont8[i].style.display = "block";
        closeCont8[i].style.display = "none";
    });
}

// 두번째 탭메뉴 내부의 탭메뉴
const lineMenus = document.querySelectorAll(".cont8 .lineMenu > li");
const lineImgs = document.querySelectorAll(".cont8 .lineImgWrap img");
const lineTexts = document.querySelectorAll(".cont8 .lineText .textView");

for(let i=0; i<lineMenus.length; i++){
    lineMenus[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<lineMenus.length; j++){
            lineMenus[j].classList.remove("on");
            lineImgs[j].classList.remove("on");
            lineTexts[j].classList.remove("on");
        }
        lineMenus[i].classList.add("on");
        lineImgs[i].classList.add("on");
        lineTexts[i].classList.add("on");
    });
}