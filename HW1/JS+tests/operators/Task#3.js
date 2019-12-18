function countPositiveAmounts(a, b, c){
    let countSum = 0;
    if (typeof a === 'string' ||typeof b === 'string'||typeof c === 'string'){
        return false;
    }
    if(a > 0){ // проверяем положительное ли число а
        countSum += a;
    } if (b > 0){ // проверяем положительное ли число b
        countSum += b;
    } if (c > 0){ // проверяем положительное ли число c
        countSum += c;
    }
    return countSum;
}



console.log(countSum); //выводим наш подсчёт положительных чисел