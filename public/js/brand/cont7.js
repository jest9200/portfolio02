const botImgs = document.querySelectorAll(".cont7 .botImgs > img");
const topImgs = document.querySelectorAll(".cont7 .topImgs > img");

for(let i=0; i<botImgs.length; i++){
    botImgs[i].addEventListener("click",()=>{
        for(let j=0; j<botImgs.length; j++){
            topImgs[j].classList.remove("on");
            botImgs[j].classList.remove("on");
        }
        topImgs[i].classList.add("on");
        botImgs[i].classList.add("on");
    });
}