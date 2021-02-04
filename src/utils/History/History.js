import Factor from "../Factors/Factor";

export default class History extends Factor {
  constructor(factor, period, interestRate, result, date, id = undefined) {
    super(factor, period, interestRate);
    this.setResult(result);
    this.id = typeof id == "undefined" ? Date.now() : id;
    this.date = date;
  }

  getId() {
    return this.id;
  }

  getDate() {
    return this.date;
  }
}
