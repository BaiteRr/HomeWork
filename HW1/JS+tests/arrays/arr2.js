function maxElem(arr) {
  let resp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > resp) {
      resp = arr[i];
    }
  }

  return resp;
}