function indexMaxElem(arr) {
  let resp = 0;
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      resp = i;
      maxValue = arr[i];
    }
  }

  return resp;
}