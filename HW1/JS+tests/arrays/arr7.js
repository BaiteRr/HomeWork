function countOddElems(arr) {
  let resp = 0;

  for (let curr of arr) {
    if (curr % 2 != 0) {
      resp++;
    }
  }

  return resp;
}