$(function(){
    $(document).mousemove(function(e){
        $('#cube').css({
            'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
        })
    })
});

let submit = document.getElementById('submit');
let ok = document.getElementById('ok');

submit.onclick = function() {
    ok.innerText = 'Форма отправлена';
};