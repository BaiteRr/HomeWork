describe('Array list', function () {
    beforeEach(function () {
        arrayList.clearArray();
    });

    it('Have key value index of array, appeal arrayList[0] , exp fist value of our obj', function () {
        const exp = 1;
        arrayList.push(1);
        const act = arrayList[0];

        assert.equal(exp, act);
    });

    describe('Push method', function () {

        it('We write a new method push to our arrayList, this method accept value and creates a new kay-value ' +
            'like at a classic array', function () {
            const exp = 1;
            arrayList.push(1);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 2;
            arrayList.push(1);
            arrayList.push(2);
            const act = arrayList[1];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 3;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            const act = arrayList[2];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 4;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            const act = arrayList[3];

            assert.equal(exp, act);
        });

        it('Try cause method push with 2 or more arg', function () {
            const exp = false;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            const act = arrayList.push(4, 2);


            assert.equal(exp, act);
        });

        it('Try cause method push without  arg', function () {
            const exp = false;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            const act = arrayList.push();


            assert.equal(exp, act);
        });

        it('We go to use method push 3 more times', function () {
            const exp = 7;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(5);
            arrayList.push(6);
            arrayList.push(7);
            const act = arrayList[6];

            assert.equal(exp, act)
        });

        it('We go to use method push more times, and we push + 2 const with null ', function () {
            const a = null;
            const b = null;
            const c = 7;
            const exp = 7;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(a);
            arrayList.push(b);
            arrayList.push(c);
            const act = arrayList[6];

            assert.equal(exp, act)
        })
    });

    describe('Length method', function () {

        it('We create new method lenght to get a new last index and zise of array Have' +
            ' already 0,1 and 2 index of array index on our arrayList, ' +
            'go to method getIndex and exp return 3', function () {
            const exp = 3;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            const act = arrayList.length();

            assert.equal(exp, act)
        });

        it('Try cause method length with arg', function () {
            const exp = false;
            const arg = 1;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            const act = arrayList.length(arg);

            assert.equal(exp, act)
        })
    });

    describe('Pop method', function () {

        it('Create method pop to delete a last kay-value in our arrayList', function () {
            const exp = 6;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(5);
            arrayList.push(6);
            arrayList.push(7);
            arrayList.pop();
            const act = arrayList.length();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 5;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(5);
            arrayList.push(6);
            arrayList.push(7);
            arrayList.pop();
            arrayList.pop();
            const act = arrayList.length();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 4;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(5);
            arrayList.push(6);
            arrayList.push(7);
            arrayList.pop();
            arrayList.pop();
            arrayList.pop();
            const act = arrayList.length();

            assert.equal(exp, act)
        });

        it('Try cause method pop with arg', function () {
            const exp = false;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            const act = arrayList.pop(1);

            assert.equal(exp, act);
        });

        it('Try cause method pop to arrayList whithout kay=value', function () {
            const exp = false;
            const act = arrayList.pop();

            assert.equal(exp, act)
        })
    });

    describe('unshift method', function () {

        it('create method unshift to add a new elem to start of our arrayList', function () {
            const exp = 1;
            arrayList.unshift(1);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 2;
            arrayList.unshift(1);
            arrayList.unshift(2);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 3;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 4;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            arrayList.unshift(4);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('use method unshift more times to add a new null elem to start of our arrayList', function () {
            const exp = null;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            arrayList.unshift(null);
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('Try cause method unshift with 2 or more arg', function () {
            const exp = false;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            arrayList.unshift(4);
            const act = arrayList.unshift(4, 2);

            assert.equal(exp, act);
        });

        it('Try cause method unshift without arg', function () {
            const exp = false;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            arrayList.unshift(4);
            const act = arrayList.unshift();

            assert.equal(exp, act);
        })
    });

    describe('shift method', function () {

        it('create method shift to delete a first elem of our arrayList', function () {
            const exp = 3;
            arrayList.unshift(1);
            arrayList.unshift(2);
            arrayList.unshift(3);
            arrayList.unshift(4);
            arrayList.shift();
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('shift more', function () {
            const exp = 3;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.shift();
            arrayList.shift();
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('shift more', function () {
            const exp = 4;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.shift();
            arrayList.shift();
            arrayList.shift();
            const act = arrayList[0];

            assert.equal(exp, act);
        });

        it('Try cause method shift with arg', function () {
            const exp = false;
            const arg = 1;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            const act = arrayList.shift(arg);

            assert.equal(exp, act);
        });

        it('Try cause method shift to arrayList whithout kay=value', function () {
            const exp = false;
            const act = arrayList.shift();

            assert.equal(exp, act)
        })
    });

    describe('toString method', function () {

        it('create method toString to return the value of the keys of the object as a string', function () {
            const exp = '1 2 3 4 5 ';
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(5);
            const act = arrayList.toString();

            assert.equal(exp, act);
        });

        it('Try cause method toString with arg', function () {
            const exp = false;
            const arg = 1;

            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.push(4);
            arrayList.toString();
            const act = arrayList.shift(arg);

            assert.equal(exp, act);
        })
    });
    /*describe('sort method', function () {
        it('create method sort to return the sorting array', function () {
            arrayList.push(3);
            arrayList.push(4);
            arrayList.push(1);
            arrayList.push(2);

            const exp =  `${arrayList[2]} ${arrayList[3]} ${arrayList[0]} ${arrayList[1]}`;
            arrayList.sort();
            const act = `${arrayList[0]} ${arrayList[1]} ${arrayList[2]} ${arrayList[3]}`;

            console.log(arrayList);
            console.log(act);
            assert.deepEqual(exp, act)

        })
    })*/

    describe('create method toLinkedList to create new the same object linkedLost inside ' +
        'our arrayList ', function () {
        it('try cause mrthod toLinkedList with arg', function () {
            const exp = false;
            const arg = 1;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            const act = arrayList.toLinkedList(arg);

            assert.equal(exp, act)
        });

        it('Try cause method toLinkedList to arrayList whithout kay=value', function () {
            const exp = false;
            const act = arrayList.toLinkedList();

            assert.equal(exp, act)
        });

        it('We push 3 times in our arrayList and do method toLinkedList ',function () {
            const exp = 2;
            arrayList.push(1);
            arrayList.push(2);
            arrayList.push(3);
            arrayList.toLinkedList();
            const act = arrayList.linkedList.root.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        })
    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.sort();
            const act = arrayList[0];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.sort();
            const act = arrayList[1];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.sort();
            const act = arrayList[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.push(1);
            arrayList.sort(function commit(a, b){return a-b});
            const act = arrayList[0];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.push(1);
            arrayList.sort(function commit(a, b){return a-b});
            const act = arrayList[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 12;
            arrayList.push(3);
            arrayList.push(2);
            arrayList.push(12);
            arrayList.push(1);
            arrayList.sort(function commit(a, b){return a-b});
            const act = arrayList[3];

            assert.equal(exp, act)
        });

        it('Sort method take arg not a function',function () {
            const exp = false;
            const arg = 1;
            const act = arrayList.sort(arg);

            assert.equal(exp, act)
        })
    })
});

describe('LinkedList', function () {
    beforeEach(function () {
        linkedList.clearList();
    });

    describe('Push method', function () {

        it('Create a linkedList push method to create new Noda in the end of our LinkedListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 2;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            console.log(linkedList)
            const act = linkedList.root.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('do push same times but another exp', function () {
            const exp = 3;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            const act = linkedList.root.nextNoda.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Try use method push() without arg', function () {
            const exp = false;
            const act = linkedList.push();

            assert.equal(exp, act)
        });

        it('Try use method push() with to or more arg', function () {
            const exp = false;
            const a = 1;
            const b = 2;
            const act = linkedList.push(a, b);

            assert.equal(exp, act)
        })
    });

    describe('Length method', function () {

        it('Create length method to see which length in our LinkedList',function () {
            const exp = 3;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('use method length wihout Noda in our list', function () {
            const exp = 0;
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('try use length method with arg',function () {
            const exp = false;
            const a = 1;
            linkedList.push(1);
            linkedList.push(1);
            const act = linkedList.length(a);

            assert.equal(exp, act)
        })
    });

    describe('Unshift method', function () {

        it('Create a linkedList unshift method to create new Noda in the end of our LinkedListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 3;
            linkedList.unshift(1);
            linkedList.unshift(2);
            linkedList.unshift(3);
            const act = linkedList.root.nextNoda.el;

            assert.equal(exp, act)
        });

        it('do unshift same times but another exp', function () {
            const exp = 5;
            linkedList.unshift(1);
            linkedList.unshift(2);
            linkedList.unshift(3);
            linkedList.unshift(4);
            linkedList.unshift(5);
            linkedList.unshift(6);
            const act = linkedList.root.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Try use method unshift() without arg', function () {
            const exp = false;
            const act = linkedList.unshift();

            assert.equal(exp, act)
        });

        it('Try use method unshift() with to or more arg', function () {
            const exp = false;
            const a = 1;
            const b = 2;
            const act = linkedList.unshift(a, b);

            assert.equal(exp, act)
        })
    });

    describe('Pop method', function () {

        it('Create method pop to delete a last Noda in our LinkedList', function () {
            const exp = 2;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.pop();
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('do pop some more times but another exp', function () {
            const exp = 3;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            linkedList.push(5);
            linkedList.push(6);
            linkedList.pop();
            linkedList.pop();
            linkedList.pop();
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('Try use method pop() with arg', function () {
            const exp = false;
            const a = 1;
            const act = linkedList.pop(a);

            assert.equal(exp, act)
        });

        it('Try cause method pop() to LinkedList whithout Nods', function () {
            const exp = false;
            const act = linkedList.pop();

            assert.equal(exp, act)
        })
    });

    describe('Shift method', function () {

        it('Create method shift to delete a first Nods in our LinkedList', function () {
            const exp = 2;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.shift();
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('do shift some more times but another exp', function () {
            const exp = 3;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            linkedList.push(5);
            linkedList.push(6);
            linkedList.shift();
            linkedList.shift();
            linkedList.shift();
            const act = linkedList.length();

            assert.equal(exp, act)
        });

        it('Try use method shift() with arg', function () {
            const exp = false;
            const a = 1;
            const act = linkedList.shift(a);

            assert.equal(exp, act)
        });

        it('Try cause method shift() to LinkedList whithout Nods', function () {
            const exp = false;
            const act = linkedList.shift();

            assert.equal(exp, act)
        })
    });

    describe('create method toArrayList to create new the same object arrayList inside ' +
        'our linkedList ', function () {
        it('try cause method arrayList with arg', function () {
            const exp = false;
            const arg = 1;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            const act = linkedList.toArrayList(arg);

            assert.equal(exp, act)
        });

        it('Try cause method toArrayList to arrayList whithout Nods', function () {
            const exp = false;
            const act = linkedList.toArrayList();

            assert.equal(exp, act)
        });

        it('We push 3 times in our linkedList and do method toArrayList ',function () {
            const exp = 2;
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.toArrayList();
            const act = linkedList.ArrayList[1];

            assert.equal(exp, act)
        })
    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.sort();
            const act = linkedList.root.nextNoda.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.sort();
            const act = linkedList.root.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.sort();
            const act = linkedList.root.nextNoda.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.push(1);
            linkedList.sort(function commit(a, b){return a-b});
            const act = linkedList.root.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.push(1);
            linkedList.sort(function commit(a, b){return a-b});
            const act = linkedList.root.nextNoda.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 12;
            linkedList.push(3);
            linkedList.push(2);
            linkedList.push(12);
            linkedList.push(1);
            linkedList.sort(function commit(a, b){return a-b});
            const act = linkedList.root.nextNoda.nextNoda.nextNoda.nextNoda.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg not a function',function () {
            const exp = false;
            const arg = 1;
            const act = linkedList.sort(arg);

            assert.equal(exp, act)
        })
    })
});