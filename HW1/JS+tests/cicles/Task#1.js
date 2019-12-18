// Найти сумму четных чисел и их количество в диапозоне от 1 до 99
function evenSum(a){
    let countSum = 0;
    let quantityNum = 0;
    if(typeof a === 'string'){
        return false;
    }
    for(i = 1; i <= a; i++){
        if ( i % 2 === 0 ){
            countSum += i;  // считаем сумму четных чисел
            quantityNum ++; // считаем количество четных
        }
    }
    let arrayTest=`${countSum} - ${quantityNum}`;
    return arrayTest;
}

