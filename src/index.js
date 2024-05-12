function capitalize (str) {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function calculator () {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    return {add, subtract, divide, multiply};
}

function caesarCipher (str) {
    str = str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[A-Z]/i)) {
      newArr.push(str[i]);
    }
    else {
      if (str[i].charCodeAt(0) - 13 > 64) {
        newArr.push(String.fromCharCode(str[i].charCodeAt(0) - 13));
      }
      else {
        newArr.push(String.fromCharCode(90 + (str[i].charCodeAt(0) - 77)));
      }
    }
  }
  return newArr.join("");
}

function analyzeArray (array) {
    let arr = array.slice();
    let len = arr.length;
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < len; i++) {
        sum += arr[i];
        if (min > arr[i]) {
            min = arr[i];
        }
        else if (max < arr[i]) {
            max = arr[i];
        }
    }
    let average = sum / len;
    return {average, min, max, length: len};
}

module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator,
    caesarCipher: caesarCipher,
    analyzeArray: analyzeArray
}

