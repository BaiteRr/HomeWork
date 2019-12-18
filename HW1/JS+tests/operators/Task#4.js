

function whoIsMax(a, b, c){
    let max = 0;
    if(typeof a === 'string' ||typeof b === 'string'||typeof c === 'string'){
        return false;
    }
    if(a * b * c + 3 > a + b + c + 3){ // проверяем какое выражение больше: умножения или сложения
        return  max = a * b * c + 3;
    }
    else{
       return max = a + b + c + 3;
    }
}

