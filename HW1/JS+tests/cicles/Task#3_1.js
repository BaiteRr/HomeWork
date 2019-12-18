// Найти корень натурального числа с точностью до целого

function naturalNumberRoot(x){
    let result;
    if (x == 0 || x == 1) {
        return x;
    }
    for (let i = 1; x > i; i++) {
        result = i * i;
        if (result > x) {
            i--;
            return i;

        } else if (result == x) {
            return i;
        }
    }
}




