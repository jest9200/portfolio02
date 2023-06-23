const passCheck = document.querySelector("#passCheck");

const memberorigin = document.querySelector("#originPass");
const memberchange = document.querySelector("#changePass");

passCheck.addEventListener("submit", (e) => {
    const originValue = memberorigin.value;
    const changeValue = memberchange.value;

    const checkOrigin = /^[\w\!\$\&\-]{12,16}$/;
    const checkChange = /^[\w\!\$\&\-]{12,16}$/;

    if (checkOrigin.test(originValue)) {
        memberorigin.parentElement.className = "wrap ok";
    } else {
        e.preventDefault();
        memberorigin.parentElement.className = "wrap no";
        memberorigin.parentElement.querySelector(".err_msg").innerText = "Invalid password format."
    }

    if (checkChange.test(changeValue)) {
        memberchange.parentElement.className = "wrap ok";
    } else {
        e.preventDefault();
        memberchange.parentElement.className = "wrap no";
        memberchange.parentElement.querySelector(".err_msg").innerText = "Only 8 to 12 English words, number, and _ are allowed."
    }
})