const titleCase = (answer) => {
  return answer
    .split(' ')
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
};

module.exports = {
  titleCase,
};
