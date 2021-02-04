class Factor {
  constructor(factor, period, interestRate) {
    this.factor = factor;
    this.period = period;
    this.interestRate = interestRate;
    this.result = 0;
  }

  getFactor = () => {
    return this.factor;
  };

  getPeriod = () => {
    return this.period;
  };

  getInterestRate = () => {
    return this.interestRate;
  };

  getResult = () => {
    return this.result;
  };

  setResult = (result) => {
    this.result = result;
  };

  equals = (factor) => {
    return (
      typeof factor != "undefined" &&
      factor.getFactor() == this.getFactor() &&
      factor.getPeriod() == this.getPeriod() &&
      factor.getInterestRate() == this.getInterestRate()
    );
  };
}

export default Factor;
