function eval(a){
    if(typeof a === 'string'){
        return false;
    }
    if (a < 0){
        return "Введено отрицательное";
    }
    switch (true){
        case (a < 20): //  0-19           F
            return 'F';
            break;

        case (a < 40): //  20-39          E
            return 'E';
            break;

        case (a < 60): //  40-59          D
            return 'D';
            break;

        case (a < 75): //  60-74          C
            return 'C';
            break;

        case (a < 90): //  75-89          B
            return 'B';
            break;

        case (a < 101): //  90-100         A
            return 'A';
            break;
        default: // проверим, что вводятся числа от 0 - 100
            console.log("Введите число от 0 - 100");
            break;
    }
}


