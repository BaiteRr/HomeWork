
function quarterDefinition(x,y){
    if (x > 0 && y > 0){ // положительные х,у
        return 1;
    } else if(x < 0 && y > 0){ // положительный у, отрицательный х
        return 2;
    } else if(x < 0 && y < 0){ // отрицательные х,у
        return 3;
    } else if(x > 0 && y < 0){ // положительный х, отрицательный у
       return 4;
    } else if( x == 0 || y == 0 ){
       return 0;
    }else{
        return false;
    }

}

console.log(quarterDefinition(2,2));


// проверим на 0 координату
