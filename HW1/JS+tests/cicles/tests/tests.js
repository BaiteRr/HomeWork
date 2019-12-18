describe("function evenSum() take arguments a and return Arra ['сумма четных чисел' , 'количество четных чисел']", function() {
    it("call function evenSum() with args a = 99   return  ['2450','49']", function () {
        const a = 99;
        const exp = '2450 - 49';
        const act = evenSum(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 99   return  ['2450','49']", function () {
        const a = '99';
        const exp = false;
        const act = evenSum(a);

        assert.equal(act, exp);
    });
});
describe("function isPrime , take args a , and return 'Составное число' или 'Простое число'", function() {
    it("call function isPrime() with args a = 11 return Простое число", function () {
        const a = 11;
        const exp = 'Простое число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 4   return  'Составное число", function () {
        const a = 4;
        const exp = 'Составное число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = -44   return  'Составное число", function () {
        const a = -44;
        const exp = 'Составное число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 2   return  'Простое число'", function () {
        const a = 2;
        const exp = 'Простое число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 17   return  'Простое число'", function () {
        const a = 17;
        const exp = 'Простое число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 23   return  'Простое число'", function () {
        const a = 23;
        const exp = 'Простое число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = '23'   return  'Простое число'", function () {
        const a = '23';
        const exp = 'Вы вводите строку ,а не число';
        const act = isPrime(a);

        assert.equal(act, exp);
    });
});

describe("function naturalNumberRoot , take args x , and return корень натурального числа", function() {
    it("call function naturalNumberRoot() with args x = 3 return 3 ", function () {
        const x = 11;
        const exp = 3;
        const act = naturalNumberRoot(x);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args x = 110 return 10 ", function () {
        const x = 110;
        const exp = 10;
        const act = naturalNumberRoot(x);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args x = 33 return 5 ", function () {
        const x = 33;
        const exp = 5;
        const act = naturalNumberRoot(x);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args x = 99 return 9 ", function () {
        const x = 99;
        const exp = 9;
        const act = naturalNumberRoot(x);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args x = 145 return 12 ", function () {
        const x = 145;
        const exp = 12;
        const act = naturalNumberRoot(x);

        assert.equal(act, exp);
    });
});


describe("function binarySearch , take args x , and return корень натурального числа", function() {
    it("call function binarySearch() with args x = 3 return 3 ", function () {
        const x = 11;
        const exp = 3;
        const act = binarySearch(x);

        assert.equal(act, exp);
    });
    it("call function binarySearch() with args x = 110 return 10 ", function () {
        const x = 110;
        const exp = 10;
        const act = binarySearch(x);

        assert.equal(act, exp);
    });
    it("call function binarySearch() with args x = 33 return 5 ", function () {
        const x = 33;
        const exp = 5;
        const act = binarySearch(x);

        assert.equal(act, exp);
    });
    it("call function binarySearch() with args x = 99 return 9 ", function () {
        const x = 99;
        const exp = 9;
        const act = binarySearch(x);

        assert.equal(act, exp);
    });
    it("call function binarySearch() with args x = 145 return 12 ", function () {
        const x = 145;
        const exp = 12;
        const act = binarySearch(x);

        assert.equal(act, exp);
    });
});


describe("function factorialN , take args x , and return factorialN", function() {
    it("call function factorialN() with args x = 4 return 24 ", function () {
        const x = 4;
        const exp = 24;
        const act = factorialN(x);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args x = 9 return 362880 ", function () {
        const x = 9;
        const exp = 362880;
        const act = factorialN(x);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args x = 11 return 39916800 ", function () {
        const x = 11;
        const exp = 39916800;
        const act = factorialN(x);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args x = 17 return 355687428096000 ", function () {
        const x = 17;
        const exp = 355687428096000;
        const act = factorialN(x);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args x = 25 return 15511210043330985984000000 ", function () {
        const x = 25;
        const exp = 15511210043330985984000000;
        const act = factorialN(x);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args x = ds return false ", function () {
        const x = 'ds';
        const exp = 'Передал строку,а надо число';
        const act = factorialN(x);

        assert.equal(act, exp);
    });
});


describe("function sumThisNum , take args x , and return sumThisNum", function() {
    it("call function sumThisNum() with args x = 124 return 7 ", function () {
        const x = 124;
        const exp = 7;
        const act = sumThisNum(x);

        assert.equal(act, exp);
    });
    it("call function sumThisNum() with args x = ds return false ", function () {
        const x = 'ds';
        const exp = 'введите число';
        const act = sumThisNum(x);

        assert.equal(act, exp);
    });
    it("call function sumThisNum() with args x = 1246 return 13 ", function () {
        const x = 1246;
        const exp = 13;
        const act = sumThisNum(x);

        assert.equal(act, exp);
    });
    it("call function sumThisNum() with args x = 35424 return 18 ", function () {
        const x = 35424;
        const exp = 18;
        const act = sumThisNum(x);

        assert.equal(act, exp);
    });
});


describe("function mirrorNumber , take args x , and return sumThisNum", function() {
    it("call function mirrorNumber() with args x = 124 return 421 ", function () {
        const x = 124;
        const exp = 421;
        const act = mirrorNumber(x);

        assert.equal(act, exp);
    });
    it("call function mirrorNumber() with args x = '124' return введите число ", function () {
        const x = '124';
        const exp = 'введите число';
        const act = mirrorNumber(x);

        assert.equal(act, exp);
    });

});
