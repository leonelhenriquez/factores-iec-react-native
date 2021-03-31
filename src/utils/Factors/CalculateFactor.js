import { OptionsFactors } from './OptionsFactors';

const CalculateFactor = factor => {
	let resultado = 0.0;
	let i = factor.getInterestRate() / 100.0;
	let n = factor.getPeriod();
	switch (factor.getFactor()) {
		case OptionsFactors.F_P:
			resultado = Math.pow(1.0 + i, n);
			break;
		case OptionsFactors.P_F:
			resultado = 1.0 / Math.pow(1.0 + i, n);
			break;
		case OptionsFactors.F_A:
			resultado = (Math.pow(1.0 + i, n) - 1.0) / i;
			break;
		case OptionsFactors.A_F:
			resultado = i / (Math.pow(1.0 + i, n) - 1.0);
			break;
		case OptionsFactors.P_A:
			resultado = (Math.pow(1.0 + i, n) - 1) / (Math.pow(1.0 + i, n) * i);
			break;
		case OptionsFactors.A_P:
			resultado = (Math.pow(1.0 + i, n) * i) / (Math.pow(1.0 + i, n) - 1);
			break;
		case OptionsFactors.A_G:
			resultado = 1 / i - n / (Math.pow(1.0 + i, n) - 1);
			break;
	}
	return resultado;
};

export default CalculateFactor;
