import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import AppTheme from '../../theme/AppTheme';
import styles from './StylesCalculatorView';
import Utils from '../../utils/Utils';
import Factor from '../../utils/Factors/Factor';
import { OptionsFactorsArray } from '../../utils/Factors/OptionsFactors';
import ColorFactor from '../../utils/Factors/ColorFactor';
import NumberResolver from '../../utils/NumberResolver';
import CalculatorEvent from './Event/CalculatorEvent';
import ListHistory from '../../utils/History/ListHistory';
import isNumber from '../../utils/isNumber';

export default class CalculatorView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			period: '',
			interestRate: '',
			result: 'Resultado',
			disabledButtons: true,
			errors: {
				period: false,
				interestRate: false,
			},
		};
	}

	componentDidMount() {
		CalculatorEvent.addShowFactorEvent(factor => {
			this.updatePeriod(factor.getPeriod().toString());
			this.updateInterestRate(factor.getInterestRate().toString());
			this.updateResult(factor);
			this.setState({ ...this.state });
		});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.state);
		if (
			prevState.period !== this.state.period ||
			prevState.interestRate !== this.state.interestRate
		) {
			this.setEnabledButtons();
			this.setErros();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.state.period !== nextState.period ||
			this.state.interestRate !== nextState.interestRate ||
			this.state.result !== nextState.result ||
			this.state.disabledButtons !== nextState.disabledButtons ||
			this.state.errors.period !== nextState.errors.period ||
			this.state.errors.interestRate !== nextState.errors.interestRate
		);
	}

	updatePeriod = nperiodos =>
		this.setState({ period: nperiodos.replace(/[^0-9,.-]/g, '') });

	updateInterestRate = tasai =>
		this.setState({ interestRate: tasai.replace(/[^0-9,.-]/g, '') });

	updateResult = factor => {
		this.setState({
			result: `( ${factor.getFactor()} , ${factor.getInterestRate()}% , ${factor.getPeriod()} )  =  ${factor.getResult()}`,
		});
	};

	getPeriod = () => this.state.period;

	getInterestRate = () => this.state.interestRate;

	calcular = typeFactor => {
		if (this.getInterestRate().length > 0 && this.getPeriod().length > 0) {
			let factor = new Factor(
				typeFactor,
				NumberResolver(this.getPeriod()),
				NumberResolver(this.getInterestRate()),
			);

			if (factor.calculateFactor()) {
				if (!factor.equals(ListHistory[0])) {
					Utils.addHistory(factor);
				}
			}

			this.updateResult(factor);
		}
	};

	setEnabledButtons = () => {
		this.setState({
			disabledButtons:
				this.getInterestRate().length === 0 ||
				this.getPeriod().length === 0 ||
				!isNumber(this.getInterestRate()) ||
				!isNumber(this.getPeriod()),
		});
	};

	setErros = () => {
		this.setState({
			errors: {
				period: !isNumber(this.getPeriod()),
				interestRate: !isNumber(this.getInterestRate()),
			},
		});
	};

	getItem = ({ item }) => {
		return (
			<>
				<Button
					style={{ ...styles.btn, backgroundColor: ColorFactor.getColor(item) }}
					mode="contained"
					onPress={() => this.calcular(item)}
					disabled={this.state.disabledButtons}
				>
					({item}, i, n)
				</Button>
			</>
		);
	};

	getHeader = () => {
		return (
			<View style={styles.viewStyle}>
				<TextInput
					label="Numero de periodos (N)"
					theme={AppTheme.themeInput}
					style={styles.input}
					keyboardType="number-pad"
					autoCorrect={false}
					mode="outlined"
					value={String(this.state.period)}
					onChangeText={periodo => this.updatePeriod(periodo)}
					maxLength={10}
					error={this.state.errors.period}
					right={<TextInput.Icon name="timetable" size={16} />}
				/>

				<TextInput
					label="Tasa de interes (%)"
					theme={AppTheme.themeInput}
					style={styles.input}
					keyboardType="number-pad"
					autoCorrect={false}
					mode="outlined"
					value={String(this.state.interestRate)}
					onChangeText={interestRate => this.updateInterestRate(interestRate)}
					maxLength={10}
					error={this.state.errors.interestRate}
					right={<TextInput.Icon name="percent" size={16} />}
				/>

				<Text style={styles.txtResultado}>{this.state.result}</Text>
			</View>
		);
	};

	render() {
		return (
			<>
				<FlatList
					ListHeaderComponent={this.getHeader}
					contentContainerStyle={styles.gridContainer}
					data={OptionsFactorsArray}
					numColumns={2}
					keyExtractor={(_item, index) => index.toString()}
					renderItem={this.getItem}
				/>
			</>
		);
	}
}
