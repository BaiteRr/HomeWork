function replaceHalfArray(arr) {
  let half = arr.length / 2;
  let div = half + arr.length % 2;

  for (let i = 0; i < div; i++) {
    let curr = arr[i];
    arr[i] = arr[div + i];
    arr[div + i] = curr;
  }

  return arr;
}