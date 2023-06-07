const area = document.querySelector(".area");
const boxArea = document.querySelector(".area_box");

const {width:areaWidth, height:areaHeight} = area.getBoundingClientRect();
const {width:boxAreaWidth, height:boxAreaHeight} = boxArea.getBoundingClientRect();
let isDragging = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;

const maxHeight = area.clientHeight - boxArea.clientHeight;

boxArea.addEventListener("mousedown",(e)=>{
    isDragging = true;
    originX = e.clientX;
    originY = e.clientY;
    originLeft = boxArea.offsetLeft;
    originTop = boxArea.offsetTop;
});

area.addEventListener("mouseup",(e)=>{
    isDragging = false;
    // console.log(box.offsetTop);
    
});

// 마우스가 area 바깥쪽으로 나갔을때에도 계속 움직이는 버그 제거 위함
area.addEventListener("mouseleave",(e)=>{
    isDragging = false;
})

// img태그 44장 생성
let imgTags = "";
for(let i=1; i<45; i++){
    imgTags = document.createElement("img");
    imgTags.setAttribute("src","/img/index/changeBg" + i + ".png");
    document.querySelector(".cont5 .imgs").append(imgTags);
}


area.addEventListener("mousemove",(e)=>{
    if(isDragging){
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;
        const endOfXpoint = areaWidth - boxAreaWidth;
        const endOfYpoint = areaHeight - boxAreaWidth;
        boxArea.style.left = `${Math.min(Math.max(0,originLeft + diffX),endOfXpoint)}px`;
        boxArea.style.top = `${Math.min(Math.max(0,originTop+ diffY),endOfYpoint)}px`;
    }

    let percent = Math.floor(boxArea.offsetTop / maxHeight * 43); 

    const wrapImg = document.querySelectorAll(".cont5 .imgs img");
    const titleCont5 = document.querySelector(".cont5 .titleWrap");

    for(let i=0; i<44; i++){
        wrapImg[i].style.display = "none";
    }
    wrapImg[percent].style.display = "block";

    // title 글씨 서서히 등장
    if(percent === 43) {
        titleCont5.style.opacity = 1;
    } else if(percent === 40){
        titleCont5.style.opacity = .8;
    } else if(percent === 37){
        titleCont5.style.opacity = .6;
    } else if(percent === 34 ){
        titleCont5.style.opacity = .4;
    } else if(percent === 30 ){
        titleCont5.style.opacity = .2;
    } else if(percent < 30) {
        titleCont5.style.opacity = 0;
    }
});



boxArea.ondragstart = function(){
    return false;
}