const litres = (time) =>
  Math.floor(time) % 2 === 0
    ? Math.floor(time) / 2
    : (Math.floor(time) - 1) / 2;
