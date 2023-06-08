const viewCont10 = document.querySelectorAll(".cont10 .view");
const coverImgCont10 = document.querySelectorAll(".cont10 .cover");
const closeCont10 = document.querySelectorAll(".cont10 .cover .coverClose");

for(let i=0; i<viewCont10.length; i++){
    viewCont10[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<viewCont10.length; j++){
            viewCont10[j].classList.remove("on");
            coverImgCont10[j].classList.remove("on");
        }
        viewCont10[i].classList.add("on");
        coverImgCont10[i].classList.add("on");
    });
}

for(let i=0; i<closeCont10.length; i++){
    closeCont10[i].addEventListener("click",(e)=>{
        e.preventDefault();
        coverImgCont10[i].classList.remove("on");
        viewCont10[i].classList.remove("on");
    })
}