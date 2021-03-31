import Factor from '../Factors/Factor';

export default class History extends Factor {
	constructor(factor, period, interestRate, result, date, id = undefined) {
		super(factor, period, interestRate);
		this.setResult(result);
		this.date = date;
	}

	getDate() {
		return this.date;
	}
}
