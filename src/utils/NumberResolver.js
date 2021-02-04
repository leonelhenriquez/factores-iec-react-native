const NumberResolver = (number) => {
  if (number.split(",", 3).length == 2) {
    return parseFloat(number.replace(",", "."));
  }
  return parseFloat(number);
};

export default NumberResolver;
