const viewOFF = document.getElementsByClassName("form-block__eye")[0];
const viewON = document.getElementsByClassName("form-block__eye-on")[0];
const password = document.getElementsByClassName("password")[0];

viewOFF.onclick = function () {
    viewOFF.className = "form-block__eye-on";
    viewON.className = "form-block__eye";
    password.type = "text";
}

viewON.onclick = function () {
    viewOFF.className = "form-block__eye";
    viewON.className = "form-block__eye-on";
    password.type = "password";
}

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });
    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });
}
runOnKeys(
    () => {
        const container = document.getElementsByClassName("lol")[0];
        container.classList.toggle('arr__turn');
    },
    "KeyQ", "KeyW", "KeyE"
);