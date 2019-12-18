// Найти корень натурального числа с точностью до целого




function binarySearch(x) {
    let left = 1;
    let right = x;
    let resultBinary;
    while (left <= right) {
        let middle = (left + right) / 2;
        middle = Math.floor(middle);
        if (middle * middle == x) {
            resultBinary = middle;
            break;
        }
        if (middle * middle < x) {
            left = middle + 1;
            resultBinary = middle;
        } else {
            right = middle - 1;
        }
    }
    return resultBinary;
}


