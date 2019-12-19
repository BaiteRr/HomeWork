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

let observable = new Observable();
let obs1 = new Observer(function (msg) {console.log(msg)});
// let obs2 = new Observer(function (msg) {alert(msg)});

observable.addObservers( obs1 );
// observable.addObservers( obs2 );

setTimeout(function () {
    observable.sendMessage("время" + new Date());
},2000);