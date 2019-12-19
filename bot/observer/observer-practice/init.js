

//Observable
function Observable() {
    let observers = [];
    this.sendMessage = function ( msg ) {
        for ( let i = 0, len = observers.length; i < len; i++){
            observers[i].notify( msg )
        }
    };
    this.addObservers = function ( observer ){
        observers.push( observer )
    }
}



//Observer
function Observer( behavior ) {
    this.notify = function ( msg ) {
        behavior( msg )
    };
}

var observable = new Observable();

var basketObs = new Observer(function (id) {
    $('.basket__products-list').append(
        $("<li></li>")
            .addClass('basket__product')
            .text('Товар' + id)
    );
});

var obsModal = new Observer(function (id) {
    var msg = 'Товар' + id + 'добавлен';
    $('.buy-modal__message').text( msg );
    $('.buy-modal').removeClass('.buy-modal__hide');
    setTimeout(function () {
        $('.buy-modal').addClass('.buy-modal__hide');
    },2000)
});
var obsServer = new Observer(function (id) {
   console.log('id' +id)
});

observable.addObservers( basketObs );
observable.addObservers( obsModal );
observable.addObservers( obsServer );


$('.product').click(function () {
    var id = $(this).attr('id');
    observable.sendMessage( id )
});

// setTimeout(function () {
//     observable.sendMessage("время" + new Date());
// },2000);


