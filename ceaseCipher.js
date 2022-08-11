function nextChar(char) {
  if (char === " ") {
    return " ";
  } else if (char === "Z") {
    return "A";
  } else if (char === "z") {
    return "a";
  } else {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }
}

function ceaseCipher(Str) {
    let cipher = "";
    let origin = Str.split("");
    for(let i=0; i<origin.length; i++) {
      cipher += nextChar(origin[i]);
    }
    return cipher;
}

module.exports = ceaseCipher;
