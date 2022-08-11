function analyzeArray(arr) {
  let average =
    arr.reduce((acc, opr) => {
      return acc + opr;
    }) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;

  return {
    average,
    min,
    max,
    length
  }
}

module.exports = analyzeArray;