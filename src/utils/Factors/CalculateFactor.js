const CalculateFactor = (factor) => {
  let resultado = 0.0;
  let i = factor.getInterestRate() / 100.0;
  let n = factor.getPeriod();
  switch (factor.getFactor()) {
    case "F/P":
      resultado = Math.pow(1.0 + i, n);
      break;
    case "P/F":
      resultado = 1.0 / Math.pow(1.0 + i, n);
      break;
    case "F/A":
      resultado = (Math.pow(1.0 + i, n) - 1.0) / i;
      break;
    case "A/F":
      resultado = i / (Math.pow(1.0 + i, n) - 1.0);
      break;
    case "P/A":
      resultado = (Math.pow(1.0 + i, n) - 1) / (Math.pow(1.0 + i, n) * i);
      break;
    case "A/P":
      resultado = (Math.pow(1.0 + i, n) * i) / (Math.pow(1.0 + i, n) - 1);
      break;
    case "A/G":
      resultado = 1 / i - n / (Math.pow(1.0 + i, n) - 1);
      break;
  }
  return resultado;
};

export default CalculateFactor;
