document.addEventListener('DOMContentLoaded', init_dropdown);
let enabledBtn = document.getElementsByClassName('english')[0];
const textLine = document.getElementsByClassName("text__line")[0];
const overlay = document.getElementById('overlay');
const dropDownMenu = document.getElementById('dropdown_menu');
const arrow = document.getElementsByClassName('text__arrow')[0];
const menu = document.getElementsByClassName('languages__btn')[0];
const buttons = document.querySelectorAll(".italian,.german,.english,.polish,.russian,.spanish,.arabic");

function init_dropdown() {
    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i];
        btn.addEventListener("click", function (e) {
            enabledBtn.classList.toggle("enabled");
            enabledBtn = btn;
            enabledBtn.classList.toggle("enabled");
            switch (i) {
                case 0:
                    textLine.innerHTML = "Deutsch";
                    break;
                case 1:
                    textLine.innerHTML = "Polski";
                    break;
                case 2:
                    textLine.innerHTML = "English";
                    break;
                case 3:
                    textLine.innerHTML = "Русский";
                    break;
                case 4:
                    textLine.innerHTML = "العربية";
                    break;
                case 5:
                    textLine.innerHTML = "Español";
                    break;
                case 6:
                    textLine.innerHTML = "Italiano";
                    break;
            }
            menu.classList.toggle('btn-closed');
        });
    }

    enabledBtn.classList.toggle("enabled");

    dropDownMenu.addEventListener('click', function () {
        menu.classList.toggle('btn-closed');
        arrow.classList.toggle('arr__turn');
    });

    overlay.addEventListener('click', function () {
        menu.classList.remove('btn-closed');
        arrow.classList.remove('arr__turn');
    });
}