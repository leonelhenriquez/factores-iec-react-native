import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation as BottomNavigationPaper } from 'react-native-paper';
import CalculatorView from '../../views/CalculatorView/Calculator';
import HistoryView from '../../views/HistoryView/HistoryView';
import InformationView from '../../views/InformationView/Information';
import BottomNavigationConfig from './BottomNavigationConfig';
import BottomNavigationEvent from './Event/BottomNavigationEvent';

export default class BottomNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: BottomNavigationConfig.index,
			routes: [
				{ key: 'calculator', title: 'Calculadora', icon: 'calculator-variant' },
				{ key: 'history', title: 'Historial', icon: 'history' },
				{ key: 'info', title: 'Información', icon: 'information-outline' },
			],
		};
	}

	componentDidMount() {
		BottomNavigationEvent.addHandleIndexChangeEvent(index => {
			BottomNavigationConfig.index = index;
			this.handleIndexChange(index);
		});
	}

	handleIndexChange = index => {
		this.setState({ index: index });
	};

	renderScene = ({ route }) => {
		switch (route.key) {
			case 'calculator':
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
				barStyle={style.barStyle}
				style={style.bottomNavigation}
			/>
		);
	}
}

const style = StyleSheet.create({
	bottomNavigation: {
		borderRadius: 0,
		paddingBottom: 16,
		margin: 0,
	},
	barStyle: {
		height: 54,
		marginTop: 8,
		marginLeft: 16,
		marginRight: 16,
		borderRadius: 30,
		padding: 0,
		backgroundColor: '#253341',
		overflow: 'hidden',
		elevation: 2.5,
	},
});
