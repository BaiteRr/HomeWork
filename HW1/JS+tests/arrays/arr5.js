function sumOddElementsIndex(arr) {
  let resp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      resp += arr[i];
    }
  }

  return resp;
}