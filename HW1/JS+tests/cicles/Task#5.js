//Посчитать сумму цифр заданого числа


function sumThisNum(a){
    if(typeof a === 'string'){
        return 'введите число';
    }
    let sum = 0;
    while (a) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    return sum;
}


