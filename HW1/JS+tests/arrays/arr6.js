function reverseArr(arr) {
  var res = new Array;

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}