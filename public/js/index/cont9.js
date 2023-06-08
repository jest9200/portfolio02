const moonWrap = document.querySelector(".cont9 .moonWrap");
const dragBox = document.querySelector(".cont9 .dragBox");

const { width: moonWidth, height: moonHeight } = moonWrap.getBoundingClientRect();
const { width: dragBoxWidth, height: dragBoxHeight } = dragBox.getBoundingClientRect();
let isDragging09 = null;
let originLeft09 = null;
let originTop09 = null;
let originX09 = null;
let originY09 = null;

dragBox.addEventListener("mousedown", (e) => {
    isDragging09 = true;
    originX09 = e.clientX;
    originY09 = e.clientY;
    originLeft09 = dragBox.offsetLeft;
    originTop09 = dragBox.offsetTop;
});

moonWrap.addEventListener("mouseup", (e) => {
    isDragging09 = false;
    // console.log(box.offsetTop);
});

moonWrap.addEventListener("mouseleave", (e) => {
    isDragging09 = false;
});

moonWrap.addEventListener("mousemove", (e) => {
    if (isDragging09) {
        const diffX = e.clientX - originX09;
        const diffY = e.clientY - originY09;
        const endOfXpoint = moonWidth - dragBoxWidth;
        const endOfYpoint = moonHeight - dragBoxHeight;
        dragBox.style.left = `${Math.min(Math.max(0, originLeft09 + diffX), endOfXpoint)}px`;
        // boxArea.style.top = `${Math.min(Math.max(0, originTop09 + diffY), endOfYpoint)}px`;
    }
    
    const leftMoonBox = document.querySelector(".moonBox.left");
    leftMoonBox.style.width = dragBox.offsetLeft + "px";
    
});