document.addEventListener("DOMContentLoaded", () => {
    let pushBtn = document.getElementById('push__btn');
    let popBtn = document.getElementById('pop__btn');
    let pushInput = document.getElementById('push__input').value;
    let popInput = document.getElementById('pop__input').value;


    let presentation = document.querySelector('lList-noda');

    pushBtn.addEventListener("click", function (e) {
        setTimeout(function (){
            pushToPresentation();
        },600);

        console.log(lList);
    });

    popBtn.addEventListener("click", function (e) {
        popFromPresentation();
        console.log(lList);
    });


    function pushToPresentation() {
        let pushInput = document.getElementById('push__input').value;
        console.log(pushInput)
        let nodeRoot = document.getElementsByClassName("lList-noda");
        nodeRoot[0].insertAdjacentHTML("beforeend",
            `<div class="nodes">${pushInput} </div>`);
        lList.push(pushInput);


    };


    function popFromPresentation(){
        var elem = document.getElementsByClassName("lList-noda").lastChild;
        elem.parentNode.removeChild(elem);


        //lList.pop();
    };
});

