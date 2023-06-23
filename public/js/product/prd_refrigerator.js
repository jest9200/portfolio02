// cont5 탭메뉴 기능
const tabMenus = document.querySelectorAll(".cont5 .tabMenu li");
const contents = document.querySelectorAll(".cont5 .tabWrap .contentWrap");

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
let menuHeight = [202,405,283,567];
let smallerHeight = [404,810,526,1053];
const mobile = matchMedia("screen and (max-width:768px)");

for(let i=0; i<detailMenus.length; i++){
    detailMenus[i].addEventListener("click",(e)=>{
        e.preventDefault();
        if(detailMenus[i].classList.contains("on")){
            detailMenus[i].classList.remove("on");
            detailDepth2[i].style.height = 0;
            detailDepth2[i].style.paddingBottom = 0;
        } else {
            for(let j=0; j<detailMenus.length; j++){
                detailMenus[j].classList.remove("on");
                detailDepth2[j].style.height = 0;
                detailDepth2[j].style.paddingBottom = 0;
            }
            detailMenus[i].classList.add("on");
            detailDepth2[i].style.paddingBottom = "50px";
            if(mobile.matches){
                detailDepth2[i].style.height = smallerHeight[i] + "px";
            } else {
                detailDepth2[i].style.height = menuHeight[i] + "px";
            }
        }
    })
}