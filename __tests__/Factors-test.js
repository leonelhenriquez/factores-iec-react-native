import Factor from '../src/utils/Factors/Factor';
import { OptionsFactors } from '../src/utils/Factors/OptionsFactors';

test('factor calculator', () => {
	let factores = [
		new Factor(
			OptionsFactors.A_F,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.A_G,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.A_P,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.F_A,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.F_P,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.P_A,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.P_F,
			Math.floor(Math.random() * 101),
			Math.floor(Math.random() * 101),
		),
		new Factor(
			OptionsFactors.P_F,
			Math.floor(Math.random() * 101) + 'a',
			Math.floor(Math.random() * 101) + 'b',
		),
	];

	factores.forEach(factor => {
		factor.calculateFactor();
		console.log(
			`( ${factor.getFactor()} , ${factor.getInterestRate()}% , ${factor.getPeriod()} )  =  ${factor.getResult()}`,
		);
	});
});
