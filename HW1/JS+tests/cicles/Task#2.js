// Проверить простое ли число? 


function isPrime(a){
    composite = false;
    if (typeof a === 'string'){
        return "Вы вводите строку ,а не число"
    }
    if ((a % 2 == 0) && (a != 2)) {
        return "Составное число";
    } else if (a == 2) {
        return "Простое число";
    } else {
        for (i = 2; i < a; i++) {
            if (a % i == 0) {
                composite = true;
                return "Составное число";
                break;
            }
            else if (composite == false) {
                return "Простое число";
                break;
            }
        }
    }
}

