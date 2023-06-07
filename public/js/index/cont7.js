const imgLists = document.querySelectorAll(".cont7 .imgList > a");
const viewImgs = document.querySelectorAll(".cont7 .view img");

for(let i=0; i<imgLists.length;i++){
    imgLists[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<imgLists.length; j++){
            imgLists[j].classList.remove("show");
            viewImgs[j].classList.remove("show");
        }
        imgLists[i].classList.add("show");
        viewImgs[i].classList.add("show");
    })
}