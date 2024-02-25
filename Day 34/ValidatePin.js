function validatePIN(pin) {
  if (pin.length == 4 || pin.length == 6) {
    return !pin.match(/\d/g) ? true : false;
  } else {
    return false;
  }
}
console.log(validatePIN("-12345567"));
