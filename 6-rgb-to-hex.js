const rgb = (r, g, b) => {
  const converToHex = (dec) => {
    let decimals = dec;
    if (dec < 0) {
      decimals = 0;
    } else if (dec > 255) {
      decimals = 255;
    }

    const hex = decimals.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
  };

  return `${converToHex(r)}${converToHex(g)}${converToHex(b)}`.toUpperCase();
};

console.log(rgb(14, 45, 0));
