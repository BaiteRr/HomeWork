//Вычислить факториал числа

function factorialN(n){
     if(typeof n === 'string'){
          return 'Передал строку,а надо число';
     }
     let result = 1;
     for (let i = 1; i <= n; i++){
          result *= i;
     }
     return result;
}
