import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton, List } from 'react-native-paper';
import BottomNavigationEvent from '../../components/appbar/Event/BottomNavigationEvent';
import Utils from '../../utils/Utils';
import CalculatorEvent from '../CalculatorView/Event/CalculatorEvent';

const ItemHistory = ({ history, onRefresh }) => {
	return (
		<List.Item
			style={styles.item}
			titleStyle={styles.itemTitle}
			title={`( ${history.getFactor()} , ${history.getInterestRate()}% , ${history.getPeriod()} ) = ${history.getResult()}`}
			right={props => (
				<IconButton
					{...props}
					icon="delete"
					size={24}
					onPress={() => {
						Utils.removeHistory(history);
						onRefresh(true);
					}}
				/>
			)}
			onPress={() => {
				CalculatorEvent.showFactor(history);
				BottomNavigationEvent.handleIndexChange(0);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	item: {
		color: '#B0BEC5',
		fontWeight: 'bold',
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#495e73',
		backgroundColor: '#374d62',
		borderRadius: 6,
		marginBottom: 10,
		elevation: 2,
	},
	itemTitle: {
		color: '#B0BEC5',

		fontFamily: 'Poppins-Regular',
		fontWeight: 'normal',
	},
});

export default ItemHistory;
