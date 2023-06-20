// 폼태그에 이벤트는 submit이벤트를 사용해야함
const join = document.querySelector("#join");

// 아이디~생년월일까지 입력값 받아오기 위한 태그선택
const memberid = document.querySelector("#memberid");
const memberpass = document.querySelector("#memberpass");
const memberpasschk = document.querySelector("#memberpasschk");
const memberemail = document.querySelector("#memberemail");
const memberphone = document.querySelector("#memberphone");
const memberbirth = document.querySelector("#memberbirth");
const membername = document.querySelector("#membername");

join.addEventListener("submit", (e) => {
    
    const idValue = memberid.value;
    const passValue = memberpass.value;
    const passChkValue = memberpasschk.value;
    const emailValue = memberemail.value;
    const phoneValue = memberphone.value;
    const birthValue = memberbirth.value;
    const nameValue = membername.value;

    //아이디 체크 -> 영문대소문자,숫자,_ -> 8~12자리
    const checkId = /^[\w]{8,12}$/;
    //비밀번호 체크 -> 영문대소문자,숫자,_,!,$,&,- -> 12~16자리
    const checkPass = /^[\w\!\$\&\-]{12,16}$/;
    //이메일 체크
    const checkEmail = /^[\w]+[\@][a-z]{5,7}[\.][a-z]{2,3}$/;
    //전화번호 체크
    const checkPhone = /^(010)[\-][\d]{4}[\-][\d]{4}$/;
    //생년월일 체크
    const checkBirth = /^(19[\d]{2}|20[\d]{2})[\-](0[1-9]|1[0-2])[\-](0[1-9]|[1-2][0-9]|3[0-1])$/;
    //이름 체크
    const checkName = /^[가-힣]{2,4}$/;

    // const manager = "manager";


    //아이디 체크
    if (checkId.test(idValue)) {
        memberid.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberid.parentElement.className = "form_control no";
        memberid.parentElement.querySelector(".error_msg").innerText = "8~12자리의 영문,숫자,_ 만 입력 가능합니다."
    }

    //비밀번호 체크
    if (checkPass.test(passValue)) {
        memberpass.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberpass.parentElement.className = "form_control no";
        memberpass.parentElement.querySelector(".error_msg").innerText = "12~16자리의 영문,숫자,_,!,$,&,- 만 입력 가능합니다."
    }

    //비밀번호확인 체크 -> 정규표현식을 굳이 돌릴필요가 없다
    if (passValue === passChkValue) {
        memberpasschk.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();s
        memberpasschk.parentElement.className = "form_control no";
        memberpasschk.parentElement.querySelector(".error_msg").innerText = "비밀번호가 일치하지 않습니다."
    }

    //이메일 체크
    if (checkEmail.test(emailValue)) {
        memberemail.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberemail.parentElement.className = "form_control no";
        memberemail.parentElement.querySelector(".error_msg").innerText = "이메일 입력 방식이 올바르지 않습니다."
    }

    //연락처 체크
    if(checkPhone.test(phoneValue)){
        memberphone.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberphone.parentElement.className = "form_control no";
        memberphone.parentElement.querySelector(".error_msg").innerText = "연락처 입력 방식이 올바르지 않습니다."
    }

    //생년월일 체크
    if(checkBirth.test(birthValue)){
        memberbirth.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberbirth.parentElement.className = "form_control no";
        memberbirth.parentElement.querySelector(".error_msg").innerText = "생년월일 입력 방식이 올바르지 않습니다."
    }

    //이름 체크
    if(checkName.test(nameValue)){
        membername.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        membername.parentElement.className = "form_control no";
        membername.parentElement.querySelector(".error_msg").innerText = "2~4자리의 한글만 입력가능합니다."
    }
});