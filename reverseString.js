function reverseString(str) {
  let str1 = str.split("");
  str1 = str1.reverse();
  let str2 = str1.join("");
  return str2;
}

module.exports = reverseString;
