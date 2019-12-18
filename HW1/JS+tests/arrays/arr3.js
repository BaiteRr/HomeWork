function indexMinElem(arr) {
  let resp = 0;
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      resp = i;
      minValue = arr[i];
    }
  }

  return resp;
}
