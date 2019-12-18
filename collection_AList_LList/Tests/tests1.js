describe("ArrayList ", function () {
    describe("function size", function () {
        it("function must return size of ArrayList, ", function () {
            ArrayList.clear();
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(1);
            assert.equal(3, ArrayList.size());
        })
    })
    describe("fuction push", function () {
        it("add 2 and return 2", function () {
            assert.equal(2, ArrayList.push(2));
        })
        it("add -3 and return -3", function () {
            assert.equal(-3, ArrayList.push(-3));
        })
        it("add '123' and return '123'", function () {
            assert.equal("123", ArrayList.push("123"));
        })
        it("add '-123' and return '-123'", function () {
            assert.equal("-123", ArrayList.push("-123"));
        })
        it("add 'aaaaaaa' and return 'aaaaaaa'", function () {
            assert.equal("aaaaaaa", ArrayList.push("aaaaaaa"));
        })
        it("add [1,3,1,6,2] and return [1,3,1,6,2]", function () {
            let a = [1, 3, 1, 6, 2];
            assert.deepEqual([1, 3, 1, 6, 2], ArrayList.push(a));
        })
        it("add empty object and return empty object", function () {
            let a = {};
            assert.deepEqual({}, ArrayList.push(a));
        })
        it("add object and return object", function () {
            let a = {
                i: 2,
                g: 3
            };
            let b = {
                i: 2,
                g: 3
            };
            assert.deepEqual(b, ArrayList.push(a));
        });
        it("add empty object and return empty object", function () {
            let a = {};
            assert.deepEqual({}, ArrayList.push(a));
        });
    });
    describe("function pop", function () {
        it("delete element = 10 from end ArrayList and return this ", function () {
            ArrayList.push(20)
            ArrayList.push(10)
            assert.equal(10, ArrayList.pop());
        })
        it("delete element = 'aa' from end ArrayList and return this ", function () {
            ArrayList.push("dsd")
            ArrayList.push("aa")
            assert.equal("aa", ArrayList.pop());
        })
        it("delete element = array from end ArrayList and return this ", function () {
            ArrayList.push([1, 2, 3, 4, 5])
            ArrayList.push([3, 2, 5, 2, 5])
            assert.deepEqual([3, 2, 5, 2, 5], ArrayList.pop());
        })
        it("delete element = object from end ArrayList and return this ", function () {
            let a = {
                i: 2
            }
            ArrayList.push(a)
            assert.equal(a, ArrayList.pop());
        })
    });

    describe("function shift", function () {
        it("delete element = 10 from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push(20)
            ArrayList.push(10)
            assert.equal(1, ArrayList.shift());
        })
        it("delete element = '10' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('20')
            ArrayList.push('10')
            assert.equal(1, ArrayList.shift());
        })
        it("delete element = 'aaa' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('aaa')
            ArrayList.push('dsds')
            assert.equal(1, ArrayList.shift());
        })
        it("delete element = 'aaa' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('aaa')
            ArrayList.push('dsds')
            ArrayList.push('dsds')
            ArrayList.push('dsds')
            assert.equal(3, ArrayList.shift());
        })
    });

    describe("function unshift", function () {
        it("add element = 10 from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push(20)
            ArrayList.push(10)
            assert.equal(3, ArrayList.unshift());
        })
        it("add element = '10' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('20')
            ArrayList.push('10')
            assert.equal(3, ArrayList.unshift());
        })
        it("add element = 'aaa' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('aaa')
            ArrayList.push('dsds')
            assert.equal(3, ArrayList.unshift());
        })
        it("add element = 'aaa' from begin ArrayList and return size of ArrayList ", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push('aaa')
            ArrayList.push('dsds')
            ArrayList.push('dsds')
            ArrayList.push('dsds')
            assert.equal(5, ArrayList.unshift());
        })
    });
    describe("function toString", function () {
        it("return ArrayList as String", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push(20)
            ArrayList.push(10)
            ArrayList.push("10")
            ArrayList.push("aaa")
            ArrayList.push([1, 4, 2, 4])
            ArrayList.push({})
            assert.deepEqual("20, 10, 10, aaa, 1,4,2,4, [object Object]", ArrayList.toString());
        })
    });
    describe("function sort()", function () {
        it("function sort ArrayList and  save changes in this ArrayList", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push(40)
            ArrayList.push(20)
            ArrayList.push(300)
            ArrayList.sort();

            assert.deepEqual([20, 300, 40], ArrayList.List);
        })
        it("function sort ArrayList using commit function and  save changes in this ArrayList", function () {
            ArrayList.List = [];
            ArrayList.length = 0;
            ArrayList.push(7)
            ArrayList.push(4)
            ArrayList.push(9)
            ArrayList.push(1)
            ArrayList.push(5)
            ArrayList.push(3)

            ArrayList.sort(function (a, b) {
                return a - b;
            });

            assert.deepEqual([1, 3, 4, 5, 7, 9], ArrayList.List);
        })
    });
    describe("Tests for function toLinkedList", function () {
        it("convert ArrayList to LinkedList and return LinkedList", function () {
            LinkedList.clear();
            ArrayList.clear();
            ArrayList.push(2)
            ArrayList.push(60)
            ArrayList.push(500)
            ArrayList.push(70)
            ArrayList.push(8)
            assert.deepEqual(LinkedList, ArrayList.toLinkedList());
        });
    });
    describe("Tests for function get", function () {
        it("get one arg = index of element and return this element", function () {
            ArrayList.clear();
            ArrayList.push(2)
            ArrayList.push(60)
            ArrayList.push(500)
            ArrayList.push(70)
            ArrayList.push(8)
            assert.deepEqual(60, ArrayList.get(1));
        });
        it("get one arg = index of element(an elemenet is from outside the borders) and return this element", function () {
            ArrayList.clear();
            ArrayList.push(2)
            ArrayList.push(60)
            ArrayList.push(500)
            ArrayList.push(70)
            ArrayList.push(8)
            assert.deepEqual(false, ArrayList.get(10));
        });
        it("get one arg = index of element(an elemenet is from outside the borders(is negative)) and return this element", function () {
            ArrayList.clear();
            ArrayList.push(2)
            ArrayList.push(60)
            ArrayList.push(500)
            ArrayList.push(70)
            ArrayList.push(8)
            assert.deepEqual(false, ArrayList.get(-5));
        });
    });
});