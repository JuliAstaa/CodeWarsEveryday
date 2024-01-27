const humanReadable = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds % minutes;
  const sec = seconds % 60;

  const addZero = (time) => {
    return time >= 10 ? time : `0${time}`;
  };

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(sec)}`;
};

console.log(humanReadable(45296));
