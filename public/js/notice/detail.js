// 첨부파일 사진들 모바일메뉴처럼
const imgWraps = document.querySelectorAll(".cont1 .imgWrap > div");

for (let i = 0; i < imgWraps.length; i++) {
    imgWraps[i].addEventListener("click", (e) => {
        if (imgWraps[i].classList.contains("on")) {
            imgWraps[i].classList.remove("on");
        } else {
            for (let j = 0; j < imgWraps.length; j++) {
                imgWraps[j].classList.remove("on");
            }
            imgWraps[i].classList.add("on");
        }
    })
}

// 삭제버튼 클릭시 확인 문구 등장 기능
const delBtn = document.querySelector(".delete");
delBtn.addEventListener("click", (e) => {

    let result = window.confirm("Are you sure you want to delete?");

    if (result) {
        submit();
    } else {
        alert("It has been canceled.");
        e.preventDefault();
    }
})