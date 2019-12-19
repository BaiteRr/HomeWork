const clickQrApple = document.getElementById("clickQrApple");
const clickQrGoogle = document.getElementById("clickQrGoogle");

const modalQrApple = document.getElementById("modalQrApple");
const modalQrGoogle = document.getElementById("modalQrGoogle");

const spanQrGoogle = document.getElementsByClassName("content__close")[0];
const spanQrApple = document.getElementsByClassName("content__close-one")[0];


clickQrGoogle.onclick = function () {
    modalQrGoogle.style.display = "block"
};

clickQrApple.onclick = function () {
    modalQrApple.style.display = "block";
};

spanQrGoogle.onclick = function () {
    modalQrGoogle.style.display = "none";
};

spanQrApple.onclick = function () {
    modalQrApple.style.display = "none";
};

modalQrGoogle.onclick = function (event) {
    if (event.target === modalQrGoogle) {
        modalQrGoogle.style.display = "none";
    }
};

modalQrApple.onclick = function (event) {
    if (event.target === modalQrApple) {
        modalQrApple.style.display = "none";
    }
};