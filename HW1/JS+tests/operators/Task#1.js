
function isEven(a , b ){
    if(a === 0 ){
        return 0;
    }
    if(typeof a === 'string' || typeof b === 'string'){
        return false;
    }
    else if(a % 2 === 0){
        count = a * b;
    } else{
        count = a + b;
    }
    return count;
}


console.log(isEven(-33.3,66));