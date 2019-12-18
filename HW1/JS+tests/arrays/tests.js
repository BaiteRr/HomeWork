describe("function minElem(arr)", function() {
	it("call minElem(arr) with args a = [3,7,2,9,76,34]  and return '2'", function () {
        const a = [3,7,2,9,76,34];
        const exp = 2;
        const act = minElem(a);

        assert.equal(act, exp);
    });
    it("call minElem(arr) with args a = [1,2,3,4,5,6]  and return '1'", function () {
        const a = [1,2,3,4,5,6];
        const exp = 1;
        const act = minElem(a);

        assert.equal(act, exp);
    });
    it("call minElem(arr) with args a = [-2,22,31,14,53,60]  and return '-2'", function () {
        const a = [-2,22,31,14,53,60];
        const exp = -2;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [41,2,3,-4,5,-6]  and return '-6'", function () {
        const a = [41,2,3,-4,5,-6];
        const exp = -6;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [11,22,33,44]  and return '11'", function () {
        const a = [11,22,33,44];
        const exp = 11;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [-207,35,3,4,28,6]  and return '-207'", function () {
        const a = [-207,35,3,4,28,6];
        const exp = -207;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [1,0,-1]  and return '-1'", function () {
        const a = [1,0,-1];
        const exp = -1;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [1.1, 1.2,-1.3]  and return '-1.3'", function () {
        const a = [1.1, 1.2,-1.3];
        const exp = -1.3;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [100,200,300,400,500,600]  and return '100'", function () {
        const a = [100,200,300,400,500,600];
        const exp = 100;
        const act = minElem(a);

        assert.equal(act, exp);
    });it("call minElem(arr) with args a = [23,456,765,32,458,987,443,4]  and return '4'", function () {
        const a = [23,456,765,32,458,987,443,4];
        const exp = 4;
        const act = minElem(a);

        assert.equal(act, exp);
    });
});
describe("function maxElem(arr)", function() {
	it("call maxElem(arr) with args a = [3,7,2,9,76,34]  and return '76'", function () {
        const a = [3,7,2,9,76,34];
        const exp = 76;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [12,45,765,23,89]  and return '765'", function () {
        const a = [12,45,765,23,89];
        const exp = 765;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [12,98,34,12,90,120]  and return '120'", function () {
        const a = [12,98,34,12,90,120];
        const exp = 120;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [1,2,3,4,5,6,7,8,9]  and return '9'", function () {
        const a = [1,2,3,4,5,6,7,8,9];
        const exp = 9;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [987,654,321]  and return '987'", function () {
        const a = [987,654,321];
        const exp = 987;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [123,321]  and return '321'", function () {
        const a = [123,321];
        const exp = 321;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [54,8,123,60,34]  and return '123'", function () {
        const a = [54,8,123,60,34];
        const exp = 123;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [11111111111111111111111,22222222222222222222222222222222222]  and return '22222222222222222222222222222222222'", function () {
        const a = [11111111111111111111111,22222222222222222222222222222222222];
        const exp = 22222222222222222222222222222222222;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [1,2,3,4,5]  and return '5'", function () {
        const a = [1,2,3,4,5];
        const exp = 5;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
    it("call maxElem(arr) with args a = [0,-1]  and return '0'", function () {
        const a = [0,-1];
        const exp = 0;
        const act = maxElem(a);

        assert.equal(act, exp);
    });
});
describe("function indexMinElem(arr)", function() {
	it("call indexMinElem(arr) with args a = [1,2,3,4,5,6]  and return '0'", function () {
        const a = [1,2,3,4,5,6];
        const exp = 0;
        const act = indexMinElem(a);

        assert.equal(act, exp);
    });
    it("call indexMinElem(arr) with args a = [3,6,7,2,4]  and return '3'", function () {
        const a = [3,6,7,2,4];
        const exp = 3;
        const act = indexMinElem(a);

        assert.equal(act, exp);
    });
    it("call indexMinElem(arr) with args a = [-1,0,1,-1.1]  and return '3'", function () {
        const a = [-1,0,1,-1.1];
        const exp = 3;
        const act = indexMinElem(a);

        assert.equal(act, exp);
    });
    it("call indexMinElem(arr) with args a = [28,35,67,90,123]  and return '0'", function () {
        const a = [28,35,67,90,123];
        const exp = 0;
        const act = indexMinElem(a);

        assert.equal(act, exp);
    });
    it("call indexMinElem(arr) with args a = [1,-1,33,456,45,66666666666666]  and return '1'", function () {
        const a = [1,-1,33,456,45,66666666666666];
        const exp = 1;
        const act = indexMinElem(a);

        assert.equal(act, exp);
    });
});
describe("function indexMaxElem(arr)", function() {
	it("call indexMaxElem(arr) with args a = [1,2,3,4,5,6]  and return '5'", function () {
        const a = [1,2,3,4,5,6];
        const exp = 5;
        const act = indexMaxElem(a);

        assert.equal(act, exp);
    });
    it("call indexMaxElem(arr) with args a = [256,963,12,456,789]  and return '1'", function () {
        const a = [256,963,12,456,789];
        const exp = 1;
        const act = indexMaxElem(a);

        assert.equal(act, exp);
    });
    it("call indexMaxElem(arr) with args a = [12,34,67,89,123]  and return '4'", function () {
        const a = [12,34,67,89,123];
        const exp = 4;
        const act = indexMaxElem(a);

        assert.equal(act, exp);
    });
    it("call indexMaxElem(arr) with args a = [228,322,0,12]  and return '1'", function () {
        const a = [228,322,0,12];
        const exp = 1;
        const act = indexMaxElem(a);

        assert.equal(act, exp);
    });
    it("call indexMaxElem(arr) with args a = [652,12,23,45,67,89,19999999]  and return '6'", function () {
        const a = [652,12,23,45,67,89,19999999];
        const exp = 6;
        const act = indexMaxElem(a);

        assert.equal(act, exp);
    });
});
describe("function sumOddElementsIndex(arr)", function() {
	it("call sumOddElementsIndex(arr) with args a = [1,1]  and return '1'", function () {
        const a = [1,1];
        const exp = 1;
        const act = sumOddElementsIndex(a);

        assert.equal(act, exp);
    });
    it("call sumOddElementsIndex(arr) with args a = [10,10,10,10,10,10]  and return '30'", function () {
        const a = [10,10,10,10,10,10];
        const exp = 30;
        const act = sumOddElementsIndex(a);

        assert.equal(act, exp);
    });
    it("call sumOddElementsIndex(arr) with args a = [12,13,14,15,16,17]  and return '42'", function () {
        const a = [12,13,14,15,16,17];
        const exp = 42;
        const act = sumOddElementsIndex(a);

        assert.equal(act, exp);
    });it("call sumOddElementsIndex(arr) with args a = [113,145,167,7654,246,789]  and return '526'", function () {
        const a = [113,145,167,7654,246,789];
        const exp = 526;
        const act = sumOddElementsIndex(a);

        assert.equal(act, exp);
    });it("call sumOddElementsIndex(arr) with args a = [100,1.3,-1.4,-500,12,45,78]  and return '188.6'", function () {
        const a = [100,1.3,-1.4,-500,12,45,78];
        const exp = 188.6;
        const act = sumOddElementsIndex(a);

        assert.equal(act, exp);
    });
});
describe("function reverseArr(arr)", function() {
	it("call reverseArr(arr) with args a = [1,2,3,4,5]  and return '[5,4,3,2,1]'", function () {
        const a = [1,2,3,4,5];
        const exp = [ 5, 4, 3, 2, 1 ];
        const act = reverseArr(a);

        assert.deepEqual(act, exp);
    });
    it("call reverseArr(arr) with args a = [6,5,4,3,2,1]  and return '[1,2,3,4,5,6]'", function () {
        const a = [6,5,4,3,2,1];
        const exp = [1,2,3,4,5,6,];
        const act = reverseArr(a);

        assert.deepEqual(act, exp);
    });
    it("call reverseArr(arr) with args a = [12,56,72,84,35]  and return '[35,84,72,56,12]'", function () {
        const a = [12,56,72,84,35];
        const exp = [35,84,72,56,12];
        const act = reverseArr(a);

        assert.deepEqual(act, exp);
    });
    it("call reverseArr(arr) with args a = [56,23,78,32,65,476,867,63,23]  and return '[23,63,867,476,65,32,78,23,56]'", function () {
        const a = [56,23,78,32,65,476,867,63,23];
        const exp = [23,63,867,476,65,32,78,23,56];
        const act = reverseArr(a);

        assert.deepEqual(act, exp);
    });
    it("call reverseArr(arr) with args a = [5,6,7,1,2,3,5,6,7,9]  and return '[9,7,6,5,3,2,1,7,6,5]'", function () {
        const a = [5,6,7,1,2,3,5,6,7,9];
        const exp = [9,7,6,5,3,2,1,7,6,5];
        const act = reverseArr(a);

        assert.deepEqual(act, exp);
    });
    
});
describe("function countOddElems(arr)", function() {
	it("call countOddElems(arr) with args a = [1,2,3,4,5]  and return '3'", function () {
        const a = [1,2,3,4,5];
        const exp = 3;
        const act = countOddElems(a);

        assert.equal(act, exp);
    });
    it("call countOddElems(arr) with args a = [245,567,245,23,67,99,54]  and return '6'", function () {
        const a = [245,567,245,23,67,99,54];
        const exp = 6;
        const act = countOddElems(a);

        assert.equal(act, exp);
    });
    it("call countOddElems(arr) with args a = [45,234,843,37,67,547,367,54,7568,56,123]  and return '7'", function () {
        const a = [45,234,843,37,67,547,367,54,7568,56,123];
        const exp = 7;
        const act = countOddElems(a);

        assert.equal(act, exp);
    });
    it("call countOddElems(arr) with args a = [123,556,8,456,344,2,346,5767,8,3,5,7,563,25]  and return '7'", function () {
        const a = [123,556,8,456,344,2,346,5767,8,3,5,7,563,25];
        const exp = 7;
        const act = countOddElems(a);

        assert.equal(act, exp);
    });
    it("call countOddElems(arr) with args a = [-1.2,0,3.35]  and return '2'", function () {
        const a = [-1.2,0,3.35];
        const exp = 2;
        const act = countOddElems(a);

        assert.equal(act, exp);
    });
    
});
describe("function InsertionSort(arr)", function() {
	it("call InsertionSort(arr) with args a = [6,2,3,9,0,12]  and return '[ 0, 2, 3, 6, 9, 12 ]'", function () {
        const a = [6,2,3,9,0,12];
        const exp = [ 0, 2, 3, 6, 9, 12 ];
        const act = InsertionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call InsertionSort(arr) with args a = [23,54,27,12,145,1]  and return '[ 1, 12, 23, 27, 54, 145 ]'", function () {
        const a = [23,54,27,12,145,1];
        const exp = [ 1, 12, 23, 27, 54, 145 ];
        const act = InsertionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call InsertionSort(arr) with args a = [13,15,12,1,0,-23,14]  and return '[ -23, 0, 1, 12, 13, 14, 15 ]'", function () {
        const a = [13,15,12,1,0,-23,14];
        const exp = [ -23, 0, 1, 12, 13, 14, 15 ];
        const act = InsertionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call InsertionSort(arr) with args a = [1,3,6,-2,34,100]  and return '[ -2, 1, 3, 6, 34, 100 ]'", function () {
        const a = [1,3,6,-2,34,100];
        const exp = [ -2, 1, 3, 6, 34, 100 ];
        const act = InsertionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call InsertionSort(arr) with args a = [3,2,5,9,12,35,6,700]  and return '[ 2, 3, 5, 6, 9, 12, 35, 700 ]'", function () {
        const a = [3,2,5,9,12,35,6,700];
        const exp = [ 2, 3, 5, 6, 9, 12, 35, 700 ];
        const act = InsertionSort(a);

        assert.deepEqual(act, exp);
    });
});

describe("function BubbleSort (arr1)", function() {
	it("call BubbleSort (arr1) with args a = [6,2,3,9,0,12]  and return '[ 12, 9, 6, 3, 2, 0 ]'", function () {
        const a = [6,2,3,9,0,12];
        const exp = [ 12, 9, 6, 3, 2, 0 ];
        const act = BubbleSort (a);

        assert.deepEqual(act, exp);
    });
    it("call BubbleSort (arr1) with args a = [23,54,27,12,145,1]  and return '[ 145, 54, 27, 23, 12, 1 ]'", function () {
        const a = [23,54,27,12,145,1];
        const exp = [ 145, 54, 27, 23, 12, 1 ];
        const act = BubbleSort (a);

        assert.deepEqual(act, exp);
    });
    it("call BubbleSort (arr1) with args a = [13,15,12,1,0,-23,14]  and return '[ 15, 14, 13, 12, 1, 0, -23 ]'", function () {
        const a = [13,15,12,1,0,-23,14];
        const exp = [ 15, 14, 13, 12, 1, 0, -23 ];
        const act = BubbleSort (a);

        assert.deepEqual(act, exp);
    });
    it("call BubbleSort (arr1) with args a = [1,3,6,-2,34,100]  and return '[ 100, 34, 6, 3, 1, -2 ]'", function () {
        const a = [1,3,6,-2,34,100];
        const exp = [ 100, 34, 6, 3, 1, -2 ];
        const act = BubbleSort (a);

        assert.deepEqual(act, exp);
    });
    it("call BubbleSort (arr1) with args a = [3,2,5,9,12,35,6,700]  and return '[ 700, 35, 12, 9, 6, 5, 3, 2 ]'", function () {
        const a = [3,2,5,9,12,35,6,700];
        const exp = [ 700, 35, 12, 9, 6, 5, 3, 2 ];
        const act = BubbleSort (a);

        assert.deepEqual(act, exp);
    });
});
describe("function SelectionSort(arr2)", function() {
	it("call SelectionSort(arr2) with args a = [6,2,3,9,0,12]  and return '[ 0, 2, 3, 6, 9, 12 ]'", function () {
        const a = [6,2,3,9,0,12];
        const exp = [ 0, 2, 3, 6, 9, 12 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call SelectionSort(arr2) with args a = [1,5,7,2,3,0,-12]  and return '[ -12, 0, 1, 2, 3, 5, 7 ]'", function () {
        const a = [1,5,7,2,3,0,-12];
        const exp = [ -12, 0, 1, 2, 3, 5, 7 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call SelectionSort(arr2) with args a = [-2,3,5,1,0,13]  and return '[ -2, 0, 1, 3, 5, 13 ]'", function () {
        const a = [-2,3,5,1,0,13];
        const exp = [ -2, 0, 1, 3, 5, 13 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call SelectionSort(arr2) with args a = [1,5,7,10,13,-23,0]  and return '[ -23, 0, 1, 5, 7, 10, 13 ]'", function () {
        const a = [1,5,7,10,13,-23,0];
        const exp = [ -23, 0, 1, 5, 7, 10, 13 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
    it("call SelectionSort(arr2) with args a = [13,15,6,7,2,4]  and return '[ 2, 4, 6, 7, 13, 15 ]'", function () {
        const a = [13,15,6,7,2,4];
        const exp = [ 2, 4, 6, 7, 13, 15 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
});
describe("function SelectionSort(arr2)", function() {
	it("call SelectionSort(arr2) with args a = [6,2,3,9,0,12]  and return '[ 0, 2, 3, 6, 9, 12 ]'", function () {
        const a = [6,2,3,9,0,12];
        const exp = [ 0, 2, 3, 6, 9, 12 ];
        const act = SelectionSort(a);

        assert.deepEqual(act, exp);
    });
});
describe("Функции сортировки по 10 заданию. Поскольку функции некоторых методов сортировки массивов нечего не возвращают(процедуры) или рекурсивны, поэтому реализованы дополнительные функции которые преобразую массив и после запуска сортировки возвращают его.", function () {

    describe('Функция принимает аргумент в виде массива и производит сортировку quickSort', function () {
        

        it('Функция принимает в аргумент не объект, ожидание false', function () {
            const a = 1;
            const exp = false;
            const act = quickSort(a);

            assert.equal(exp, act);
        });

        it('Функция не принимает аргумента, ожидание false', function () {
            const exp = false;
            const act = quickSort();

            assert.equal(exp, act);
        });

        it('Функция принимает более одного аргумента, ожидание false', function () {
            const arr = [1,2,3,4];
            const b = 1;
            const exp = false;
            const act = quickSort(arr, b);

            assert.equal(exp, act);
        });
    });

    describe('Сортировка mergeSort делится на 3 функции', function () {
            it('Функция принимает два аргумента a  = "ddsd", b = 4, ожидание  "false"', function () {
            const arr = 'ddsd';
            const b = 4;
            const exp = 'false';
            const act = Mergee(arr, b);

            assert.deepEqual(exp, act);
        });
            it('Функция принимает два аргумента a  = 2, b = "dsad", ожидание  "false"', function () {
            const arr = 2;
            const b = "dsad";
            const exp = 'false';
            const act = Mergee(arr, b);

            assert.deepEqual(exp, act);
        });
             it('Функция принимает два аргумента a  = "ddsd", b = "dsad", ожидание  "false"', function () {
            const arr = "ddsd";
            const b = "dsad";
            const exp = 'false';
            const act = Mergee(arr, b);

            assert.deepEqual(exp, act);
        });
              it('Функция принимает два аргумента a  = 2, b = 3, ожидание  "false"', function () {
            const arr = 2;
            const b = 3;
            const exp = 'false';
            const act = Mergee(arr, b);

            assert.deepEqual(exp, act);
        });

        it('Функция принимает два аргумента a  = [1,2,5,1], b = 3, ожидание  [ 1, 1, 2, 5 ]', function () {
            const arr = [1,2,5,1];
            const b = 3;
            const exp = [ 1, 1, 2, 5 ];
            const act = Mergee(arr, b);

            assert.deepEqual(exp, act);
        });
        it('Функция аргументов принимает , ожидание  "false"', function () {
            const exp = 'false';
            const act = Mergee();

            assert.deepEqual(exp, act);
        });

    });
    describe('Сортировка piramid() делится на 3 функции', function () {
            it('Функция принимает два аргумента a  = "ddsd", b = 4, ожидание  "false"', function () {
            const arr = 'ddsd';
            const b = 4;
            const exp = 'false';
            const act = piramid(arr, b);

            assert.deepEqual(exp, act);
        });
            it('Функция принимает два аргумента a  = 2, b = "dsad", ожидание  "false"', function () {
            const arr = 2;
            const b = "dsad";
            const exp = 'false';
            const act = piramid(arr, b);

            assert.deepEqual(exp, act);
        });
             it('Функция принимает два аргумента a  = "ddsd", b = "dsad", ожидание  "false"', function () {
            const arr = "ddsd";
            const b = "dsad";
            const exp = 'false';
            const act = piramid(arr, b);

            assert.deepEqual(exp, act);
        });
              it('Функция принимает два аргумента a  = 2, b = 3, ожидание  "false"', function () {
            const arr = 2;
            const b = 3;
            const exp = 'false';
            const act = piramid(arr, b);

            assert.deepEqual(exp, act);
        });

        it('Функция принимает два аргумента a  = [1,2,5,1], b = 3, ожидание  [ 1, 1, 2, 5 ]', function () {
            const arr = [1,2,5,1];
            const b = 3;
            const exp = [ 1, 1, 2, 5 ];
            const act = piramid(arr, b);

            assert.deepEqual(exp, act);
        });
         it('Функция аргументов принимает , ожидание  "false"', function () {
            const exp = 'false';
            const act = piramid();

            assert.deepEqual(exp, act);
        });

    });
    describe('Сортировка shellSort() делится на 2 функции', function () {
            it('Функция принимает два аргумента a  = "ddsd", b = 4, ожидание  "false"', function () {
            const arr = 'ddsd';
            const b = 4;
            const exp = 'false';
            const act = shellSort(arr, b);

            assert.deepEqual(exp, act);
        });
            it('Функция принимает два аргумента a  = 2, b = "dsad", ожидание  "false"', function () {
            const arr = 2;
            const b = "dsad";
            const exp = 'false';
            const act = shellSort(arr, b);

            assert.deepEqual(exp, act);
        });
             it('Функция принимает два аргумента a  = "ddsd", b = "dsad", ожидание  "false"', function () {
            const arr = "ddsd";
            const b = "dsad";
            const exp = 'false';
            const act = shellSort(arr, b);

            assert.deepEqual(exp, act);
        });
              it('Функция принимает два аргумента a  = 2, b = 3, ожидание  "false"', function () {
            const arr = 2;
            const b = 3;
            const exp = 'false';
            const act = shellSort(arr, b);

            assert.deepEqual(exp, act);
        });

        it('Функция принимает два аргумента a  = [1,2,5,1], b = 3, ожидание  [ 1, 1, 2, 5 ]', function () {
            const arr = [1,2,5,1];
            const b = 3;
            const exp = [ 1, 1, 2, 5 ];
            const act = shellSort(arr, b);

            assert.deepEqual(exp, act);
        });
        it('Функция аргументов принимает , ожидание  "false"', function () {
            const exp = 'false';
            const act = shellSort();

            assert.deepEqual(exp, act);
        });

    });

        
});