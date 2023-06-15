// cont6 탭메뉴 기능
const tabMenus = document.querySelectorAll(".cont6 .tabMenu li");
const contents = document.querySelectorAll(".cont6 .tabWrap .contentWrap");

for(let i=0; i<tabMenus.length; i++){
    tabMenus[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<tabMenus.length; j++){
            tabMenus[j].classList.remove("on");
            contents[j].classList.remove("on");
        }
        tabMenus[i].classList.add("on");
        contents[i].classList.add("on");
    })
}

// cont8 모바일메뉴 기능
const detailMenus = document.querySelectorAll(".cont8 .detailMenu > li");
const detailDepth2 = document.querySelectorAll(".cont8 .detailMenu > li .depth2");
let menuHeight = [445,466,203,203];

for(let i=0; i<detailMenus.length; i++){
    detailMenus[i].addEventListener("click",(e)=>{
        e.preventDefault();
        if(detailMenus[i].classList.contains("on")){
            detailMenus[i].classList.remove("on");
            detailDepth2[i].style.height = 0;
        } else {
            for(let j=0; j<detailMenus.length; j++){
                detailMenus[j].classList.remove("on");
                detailDepth2[j].style.height = 0;
            }
            detailMenus[i].classList.add("on");
            detailDepth2[i].style.height = menuHeight[i] + "px";
        }
    })
}
