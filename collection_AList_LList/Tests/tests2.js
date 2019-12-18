describe("Tests for LibkedList", function () {
  describe("Tests for function push", function () {
    it("get arg = 333 and return this value", function () {
      LinkedList.clear();
      assert.equal(333, LinkedList.push(333));
    });
    it("get arg = 'aaa' and return this value", function () {
      assert.equal("aaa", LinkedList.push("aaa"));
    });
    it("get arg = [1,2,3,5] ad return this value", function () {
      assert.deepEqual([1, 2, 3, 5], LinkedList.push([1, 2, 3, 5]));
    });
    it("get arg = {} ad return this value", function () {
      assert.deepEqual({}, LinkedList.push({}));
    });
    it("size of LinkedList will be bigger after push", function () {
      LinkedList.push(111);
      assert.equal(5, LinkedList.root.lenght);
    });
  });
  describe("Tests for function size", function () {
    it("return size of LinkedList", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      LinkedList.push(4)
      assert.equal(5, LinkedList.size());
    });
  });
  describe("Tests for function pop", function () {
    it("delete element from end and return this element", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      LinkedList.push(4)
      assert.equal(4, LinkedList.pop());
    });
    it("delete element from end and return this element", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      LinkedList.push({})
      assert.deepEqual({}, LinkedList.pop());
    });
    it("delete element from end and return this element", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      LinkedList.push([1, 2, 3, 5])
      assert.deepEqual([1, 2, 3, 5], LinkedList.pop());
    });
  });
  describe("Tests for function unshift", function () {
    it("add element to begin and return this element", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      assert.equal(777, LinkedList.unshift(777));
    });
    it("add element to begin and size will be  bigger", function () {
      LinkedList.unshift(111)
      LinkedList.unshift(333)
      assert.equal(7, LinkedList.root.lenght);
    });
  });
  describe("Tests for function shift", function () {
    it("delete element from begin and return this element", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(3)
      LinkedList.push(5)
      LinkedList.push(7)
      assert.equal(2, LinkedList.shift());
    });
    it("delete element from begin and size will be  bigger", function () {
      LinkedList.shift()
      assert.equal(2, LinkedList.root.lenght);
    });
  });
  describe("Tests for function toString", function () {
    it("return  all elements of LinkedList  as string", function () {
      LinkedList.clear();
      LinkedList.push("aaa");
      LinkedList.push([1, 2, 3, 4]);
      LinkedList.push({});
      assert.equal("aaa, 1,2,3,4, [object Object]", LinkedList.toString());
    });
  });
  describe("Tests for function sort", function () {
    it("is arg function?", function () {
      LinkedList.clear();
      LinkedList.push(2)
      LinkedList.push(60)
      LinkedList.push(500)
      LinkedList.push(70)
      LinkedList.push(8)
      assert.equal(false, LinkedList.sort(333));
    });
  });
  describe("Tests for function toArrayList", function () {
    it("convert LinkedList to ArrayList and return ArrayList", function () {
      LinkedList.clear();
      ArrayList.clear();
      LinkedList.push(2)
      LinkedList.push(60)
      LinkedList.push(500)
      LinkedList.push(70)
      LinkedList.push(8)
      assert.deepEqual(ArrayList, LinkedList.toArrayList());
    });
  });
});