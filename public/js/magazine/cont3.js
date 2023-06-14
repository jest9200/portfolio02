const moreBtn = document.querySelector(".cont3 .moreBtn");
const boxWraps = document.querySelectorAll(".cont3 .boxWrap");
let startIndex = 3;

moreBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=startIndex; i<startIndex + 3; i++){
        boxWraps[i].style.display = "block";
    }
    startIndex = startIndex + 3;
    if(startIndex >= boxWraps.length){
        moreBtn.style.display = "none";
    }
})
