import Settings from '../../Settings';
import CalculateFactor from './CalculateFactor';

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

	setResult = result => {
		this.result = result;
	};

	equals = factor => {
		return (
			typeof factor !== 'undefined' &&
			factor.getFactor() === this.getFactor() &&
			factor.getPeriod() === this.getPeriod() &&
			factor.getInterestRate() === this.getInterestRate()
		);
	};

	calculateFactor = () => {
		let result = CalculateFactor(this);
		let error = false;

		if (Number.isNaN(result)) {
			result = 'Error';
			error = true;
		} else if (!Number.isFinite(result)) {
			result = '∞';
			error = true;
		} else {
			result = Number.parseFloat(result).toFixed(Settings.decimal_precision);
		}

		this.setResult(result);

		// Returns true if the factor is calculated correctly
		return !error;
	};
}

export default Factor;
