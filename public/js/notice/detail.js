const imgWraps = document.querySelectorAll(".cont1 .imgWrap > div");

for(let i=0; i<imgWraps.length; i++){
    imgWraps[i].addEventListener("click",(e)=>{
        if(imgWraps[i].classList.contains("on")){
            imgWraps[i].classList.remove("on");
        } else {
            for(let j=0; j<imgWraps.length; j++){
                imgWraps[j].classList.remove("on");
            }
            imgWraps[i].classList.add("on");
        }
    })
}