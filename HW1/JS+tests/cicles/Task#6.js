// Вывести число, которое является зеркальным отображением последовательности цифр заданого числа, например задано число 123, вывести 321

function mirrorNumber(a){
    if(typeof a === 'string'){
        return 'введите число';
    }
    let inline = '';
    let result;
    while (a) {
        result = a % 10;
        a = Math.floor(a / 10);
        inline += result + '';

    }
         return inline;
}

