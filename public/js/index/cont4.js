const playCont4 = document.querySelector(".cont4 .play");
const closeCont4 = document.querySelector(".cont4 .close");
const prdVid = document.querySelector(".cont4 .prdVid");
const imgWrapCont4 = document.querySelector(".cont4 .imgWrap");

playCont4.onclick = (e)=>{
    e.preventDefault();
    prdVid.play();
    imgWrapCont4.classList.add("on");
}

closeCont4.onclick = (e)=>{
    e.preventDefault();
    prdVid.pause();
    prdVid.currentTime = 0;
    imgWrapCont4.classList.remove("on");
}