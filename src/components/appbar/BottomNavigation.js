import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation as BottomNavigationPaper } from 'react-native-paper';
import AppTheme from '../../theme/AppTheme';
import CalculatorView from '../../views/CalculatorView/Calculator';
import HistoryView from '../../views/HistoryView/HistoryView';
import InformationView from '../../views/InformationView/Information';
import BottomNavigationConfig from './BottomNavigationConfig';
import BottomNavigationEvent from './Event/BottomNavigationEvent';

const style = StyleSheet.create({
	bottomNav: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
	},
	btnNavBar: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -2,
		},
		shadowOpacity: 1,
		shadowRadius: 2,
	},
	nav: { backgroundColor: AppTheme.theme.colors.backgroundColor },
});

export default class BottomNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...BottomNavigationConfig,
			routes: [
				{ key: 'home', title: 'Calculadora', icon: 'calculator-variant' },
				{ key: 'history', title: 'Historial', icon: 'history' },
				{ key: 'info', title: 'Información', icon: 'information-outline' },
			],
		};
	}

	componentDidMount() {
		BottomNavigationEvent.addHandleIndexChangeEvent(index =>
			this.handleIndexChange(index),
		);
	}

	handleIndexChange = index => {
		BottomNavigationConfig.index = index;
		this.setState({ index: BottomNavigationConfig.index });
	};

	renderScene = ({ route }) => {
		switch (route.key) {
			case 'home':
				return <CalculatorView />;
			case 'history':
				return <HistoryView />;
			case 'info':
				return <InformationView />;
		}
	};

	render() {
		return (
			<BottomNavigationPaper
				navigationState={this.state}
				onIndexChange={this.handleIndexChange}
				renderScene={this.renderScene}
				shifting={false}
				sceneAnimationEnabled={true}
				keyboardHidesNavigationBar={true}
				barStyle={style.btnNavBar}
			/>
		);
	}
}
