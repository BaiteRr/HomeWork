const LinkedList = {
  root: {
    next: null,
    prev: null,
    lenght: 0
  }
};
LinkedList.createNode = function (el) {
  return {
    el: el ? el : null,
    next: null,
    prev: null
  };
}
LinkedList.push = function (el) {
  let newNoda = this.createNode(el);
  let Noda = this.root;
  while (Noda.next && Noda.next.el != null) {
    Noda = Noda.next;
    newNoda.prev = Noda;
  }
  Noda.next = newNoda;
  this.root.lenght = Number(this.root.lenght) + 1;
  return el;
}
const ArrayList = {
  List: [],
  length: 0,
  push: function (element) {
    this.List[this.length] = element;
    this.length++;
    return element;
  },
  clear: function () {
    this.length = 0;
    this.List = [];
  },
  pop: function () {
    let element = this.List[this.length - 1];
    let a = [];
    for (let i = 0; i < this.length - 1; i++) {
      a[i] = this.List[i];
    }
    this.List = a;
    this.length--;
    return element;
  },
  size: function () {
    return this.length;
  },
  shift: function () {
    const a = [];
    let j = 0;
    for (let i = 1; i < this.length; i++) {
      a[j] = this.List[i];
      j++;
    }
    this.List = a;
    this.length--;
    return this.length;
  },
  unshift: function (element) {
    const a = [];
    a[0] = element;
    let j = 1;
    for (let i = 0; i < this.length; i++) {
      a[j] = this.List[i];
      j++;
    }
    this.List = a;
    this.length++;
    return this.length;
  },
  toString: function () {
    let string = String(this.List[0]);
    for (let i = 1; i < this.length; i++) {
      string += ", " + String(this.List[i]);
    }
    return string;
  },
  sort: function (commit) {
    if (commit) {
      if (typeof commit == "function") {
        for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < this.length; j++) {
            if (j == this.length - 1)
              break;
            if (commit(this.List[j], this.List[j + 1]) > 0) {
              let easy = this.List[j + 1];
              this.List[j + 1] = this.List[j];
              this.List[j] = easy;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (j == this.length - 1)
            break;
          if (String(this.List[j]) > String(this.List[j + 1])) {
            let easy = this.List[j + 1];
            this.List[j + 1] = this.List[j];
            this.List[j] = easy;
          }
        }
      }
    }
  },
  toLinkedList: function () {
    LinkedList.clear();
    for (let i = 0; i <= ArrayList.size() + 3; i++) {
      LinkedList.push(ArrayList.pop());
    }
    return LinkedList;
  },
  get: function (index) {
    if (index >= this.length || index < 0)
      return false;
    return this.List[index];
  }
}


LinkedList.createNode = function (el) {
  return {
    el: el ? el : null,
    next: null,
    prev: null
  };
}
LinkedList.push = function (el) {
  let newNoda = this.createNode(el);
  let Noda = this.root;
  while (Noda.next && Noda.next.el != null) {
    Noda = Noda.next;
    newNoda.prev = Noda;
  }
  Noda.next = newNoda;
  this.root.lenght = Number(this.root.lenght) + 1;
  return el;
}
LinkedList.size = function () {
  return this.root.lenght;
}
LinkedList.clear = function () {
  this.root.next = null;
  this.root.prev = null;
  this.root.lenght = 0;
}
LinkedList.pop = function () {
  let Noda = this.root;
  while (Noda.next && Noda.next.el != null) {
    Noda = Noda.next;
  }
  let el = Noda.el;
  Noda.el = null;
  Noda.next = null;
  Noda.prev = null;
  this.root.lenght--;
  return el;
}
LinkedList.unshift = function (el) {
  let Noda = this.root;
  newNoda = this.createNode(el);
  newNoda.next = Noda.next;
  Noda.next.prev = newNoda;
  Noda.next = newNoda;
  newNoda.prev = null;
  this.root.lenght++;
  return el;
}
LinkedList.shift = function () {
  let Noda = this.root;
  let secondNoda = Noda.next;
  let el = secondNoda.el;
  secondNoda.next.prev = null;
  Noda.next = secondNoda.next;
  this.root.lenght--;
  return el;
}
LinkedList.toString = function () {
    let Noda = this.root;
    Noda = Noda.next;
    let string = String(Noda.el);
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
      string += ", " + String(Noda.el);
    }
    return string;
  },
  LinkedList.sort = function (commit) {
    if (commit) {
      if (typeof commit != "function")
        return false;
      let a = LinkedList.toArrayList();
      a.sort(commit);
      return a.toLinkedList();
    } else {
      let a = LinkedList.toArrayList();
      s.sort();
      return a.toLinkedList();
    }
  },
  LinkedList.toArrayList = function () {
    ArrayList.clear();
    let Noda = this.root;
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
      ArrayList.push(Noda.el);
    }
    return ArrayList;
  }