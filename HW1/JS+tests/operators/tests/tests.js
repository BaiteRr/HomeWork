describe("function isEven() take arguments a and b if 'a' even - a * b , else a + b", function() {
    it("call function isEven with args a = 4, b = 6 and return 24", function () {
        const a = 4;
        const b = 6;
        const exp = 24;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = 3, b = 6 and return 9", function () {
        const a = 3;
        const b = 6;
        const exp = 9;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = 4, b = 6 and return 24", function () {
        const a = 3.3;
        const b = 6;
        const exp = 9.3;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = -4, b = 6 and return -24", function () {
        const a = -4;
        const b = 6;
        const exp = -24;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = -33, b = -6 and return -39", function () {
        const a = -33;
        const b = -6;
        const exp = -39;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = -33.3, b = 6 and return 66", function () {
        const a = -33.3;
        const b = 66;
        const exp = 32.7;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = 0, b = 3 and return 0", function () {
        const a =  0;
        const b = 3;
        const exp = 0;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = 0, b = 3 and return 0", function () {
        const a =  0;
        const b = 3;
        const exp = 0;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = string '0' , b = 3 and return false", function () {
        const a =  '0';
        const b = 3;
        const exp = false;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
    it("call function isEven with args a = 0 , b =string '3' and return false", function () {
        const a = 3;
        const b = '33';
        const exp = false;
        const act = isEven(a, b);

        assert.equal(act, exp);
    });
});


describe("function quarterDefinition() take arguments x and y and return quarters ", function() {
    it("call function quarterDefinition with args x = 4, y = 6 and return 1", function () {
        const x = 4;
        const y = 6;
        const exp = 1;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x = 4, y = 6 and return 2", function () {
        const x = -4;
        const y = 6;
        const exp = 2;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x = 4, y = 6 and return 4", function () {
        const x = 4;
        const y = -6;
        const exp = 4;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x = -4, y = -6 and return 3", function () {
        const x = -4;
        const y = -6;
        const exp = 3;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x = -4.4444, y = -6 and return 3", function () {
        const x = -4.4444;
        const y = -6;
        const exp = 3;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  0, y = -6 and return 0", function () {
        const x = 0;
        const y = -6;
        const exp = 0;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  0, y = 0 and return 0", function () {
        const x = 0;
        const y = 0;
        const exp = 0;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  3, y = 0 and return 0", function () {
        const x = 3;
        const y = 0;
        const exp = 0;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  '3', y = 0 and return false", function () {
        const x = '3';
        const y = 0;
        const exp = false;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  '3', y = '0' and return false", function () {
        const x = '3';
        const y = '0';
        const exp = false;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
    it("call function quarterDefinition with args x =  3, y = '0' and return false", function () {
        const x = 3;
        const y = '0';
        const exp = false;
        const act = quarterDefinition(x, y);

        assert.equal(act, exp);
    });
});



describe("function countPositiveAmounts() take arguments a and b and c and return sum of positive args ", function() {
    it("call function countPositiveAmounts with args a = 4, b = 6 , c = 3 and return 13", function () {
        const a = 4;
        const b = 6;
        const c = 3;
        const exp = 13;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = -4, b = 6 , c = 3 and return 9", function () {
        const a = -4;
        const b = 6;
        const c = 3;
        const exp = 9;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = 4, b = -6 , c = 3 and return 7", function () {
        const a = 4;
        const b = -6;
        const c = 3;
        const exp = 7;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = 4, b = -6 , c = 3 and return 10", function () {
        const a = 4;
        const b = 6;
        const c = -3;
        const exp = 10;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = -4, b = -6 , c = 3 and return 3", function () {
        const a = -4;
        const b = -6;
        const c = 3;
        const exp = 3;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = 0, b = 2.34 , c = 5.67 and return 8.01", function () {
        const a = 0;
        const b = 2.34;
        const c = 5.67;
        const exp = 8.01;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = -4, b = -6 , c = -3 and return 0", function () {
        const a = -4;
        const b = -6;
        const c = -3;
        const exp = 0;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = '-4', b = -6 , c = -3 and return false", function () {
        const a = '-4';
        const b = -6;
        const c = -3;
        const exp = false;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = '4', b = '6' , c = 3 and return false", function () {
        const a = '4';
        const b = '6';
        const c = 3;
        const exp = false;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });
    it("call function countPositiveAmounts with args a = '4', b = '6' , c = '3' and return false", function () {
        const a = '4';
        const b = '6';
        const c = '3';
        const exp = false;
        const act = countPositiveAmounts(a, b, c);

        assert.equal(act, exp);
    });

});


describe("function whoIsMax() take arguments a and b and c and  return whoIsMax(a+b+c , a*b*c)+3 ", function() {
    it("call function whoIsMax with args a = 4, b = 6 , c = 3 and return 75", function () {
        const a = 4;
        const b = 6;
        const c = 3;
        const exp =75;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = 5, b = 3 , c = 0 and return 11", function () {
        const a = 5;
        const b = 3;
        const c = 0;
        const exp =11;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -5, b = 3 , c = 0 and return 1", function () {
        const a = -5;
        const b = 3;
        const c = 0;
        const exp = 3;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = 6 , c = 3 and return 8", function () {
        const a = -4;
        const b = 6;
        const c = 3;
        const exp = 8;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = -6 , c = 3 and return 75", function () {
        const a = -4;
        const b = -6;
        const c = 3;
        const exp = 75;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = -6 , c = -3 and return -10", function () {
        const a = -4;
        const b = -6;
        const c = -3;
        const exp = -10;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = '-4', b = -6 , c = -3 and return false", function () {
        const a = '-4';
        const b = -6;
        const c = -3;
        const exp = false;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = '-4', b = '-6' , c = -3 and return false", function () {
        const a = '-4';
        const b = '-6';
        const c = -3;
        const exp = false;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = '-4', b = '-6' , c = '-3' and return false", function () {
        const a = '-4';
        const b = '-6';
        const c = '-3';
        const exp = false;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });

});


describe("function eval() a -  0-19=F, 20-39=E , 40-59=D , 60-74=C , 75-89=B , 90-100 = A", function() {
    it("call function eval with args a = 0, and return F", function () {
        const a = 0;
        const exp = 'F';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 4, and return F", function () {
        const a = 4;
        const exp = 'F';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 20, and return E", function () {
        const a = 20;
        const exp = 'E';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 40, and return D", function () {
        const a = 40;
        const exp = 'D';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 59, and return D", function () {
        const a = 59;
        const exp = 'D';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 20, and return C", function () {
        const a = 60;
        const exp = 'C';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 20, and return B", function () {
        const a = 75;
        const exp = 'B';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = 100, and return A", function () {
        const a = 100;
        const exp = 'A';
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = '100', and return false", function () {
        const a = '100';
        const exp = false;
        const act = eval(a);

        assert.equal(act, exp);
    });
    it("call function eval with args a = '100', and return Введено отрицательное", function () {
        const a = -4;
        const exp = "Введено отрицательное";
        const act = eval(a);

        assert.equal(act, exp);
    });

});
