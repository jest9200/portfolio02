// 첨부한 파일의 확장자 체크 기능
const upload = document.querySelector("#upload");
const inputFile = document.querySelector("#file");
const submitBtn = document.querySelector("#submit");
const extCheck = [".jpg", ".png", ".jpeg", ".gif"];

// ex) 첨부파일이 3개일때 하나라도 이미지파일 형식이 아니면 업로드 불가
let validRequest = false; //true일때 데이터 전송 처리할 역할
let validCount = 0; //체크시 이미지파일에 맞는 경우면 카운트 1씩 증가

// 파일 여러개 첨부할때
submitBtn.addEventListener("click", (e) => {
    for (let i = 0; i < inputFile.files.length; i++) {
        let fileName = inputFile.files[i].name;
        let fileLen = fileName.length;
        let fileDots = fileName.lastIndexOf(".");
        let fileExts = fileName.substring(fileDots, fileLen);
        let fileChange = fileExts.toLowerCase();
        let result = extCheck.includes(fileChange);

        // 체크 결과가 true면 카운트가 1 증가
        // false면 카운트 증가 없음
        if (result) {
            validCount++
            if (validCount === inputFile.files.length) {
                validRequest = true;
            }
        }
    }

    if (validRequest) {
        upload.submit();
    } else {
        validCount = 0;
        alert("You must upload at least one file in image format.")
        e.preventDefault();
    }
});