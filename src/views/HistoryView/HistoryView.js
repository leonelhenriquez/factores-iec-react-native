import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListHistory from '../../utils/History/ListHistory';
import ItemHistory from './ItemHistory';
import { IconButton, Snackbar, Text, Title } from 'react-native-paper';
import HistoryIcon from '../../components/Icons/HistoryIcon';
import AppTheme from '../../theme/AppTheme';
import Utils from '../../utils/Utils';

export default class HistoryView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			visibleSnackbar: false,
		};
		this.prevFactor = undefined;
	}

	setRefreshing = refreshing => {
		this.setState({ refreshing: refreshing });
		setTimeout(() => this.setState({ refreshing: false }), 10);
	};

	showSnackBar = () => this.setState({ visibleSnackbar: true });

	onDismissSnackBar = () => this.setState({ visibleSnackbar: false });

	renderHeader = () => {
		return (
			<View style={styles.header}>
				<Title style={styles.title}>Historial</Title>
				{ListHistory.length > 0 && (
					<IconButton
						icon="delete-sweep-outline"
						style={styles.iconRemoveAll}
						onPress={() => this.showSnackBar()}
					/>
				)}
			</View>
		);
	};

	renderFooter = () => {
		return (
			<>
				{ListHistory.length === 0 && (
					<View style={styles.viewVoidMessage}>
						<HistoryIcon size={32} color="#B0BEC5" style={styles.iconStyle} />
						<Text style={styles.voidtText}>No hay historial</Text>
					</View>
				)}
			</>
		);
	};

	renderItem = ({ item, index }) => {
		let dateShow;

		if (index === 0) {
			dateShow = item.getDate();
		} else if (
			typeof this.prevFactor !== 'undefined' &&
			(this.prevFactor.getDate().day !== item.getDate().day ||
				this.prevFactor.getDate().month !== item.getDate().month ||
				this.prevFactor.getDate().year !== item.getDate().year)
		) {
			dateShow = item.getDate();
		}

		this.prevFactor = item;

		if (index === ListHistory.length - 1) {
			this.prevFactor = undefined;
		}

		return (
			<>
				{typeof dateShow !== 'undefined' && (
					<Text style={styles.textDate}>
						{dateShow.day}/{dateShow.month}/{dateShow.year}
					</Text>
				)}
				<ItemHistory history={item} onRefresh={this.setRefreshing} />
			</>
		);
	};

	render() {
		return (
			<>
				<FlatList
					refreshing={this.state.refreshing}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					contentContainerStyle={styles.root}
					data={ListHistory}
					numColumns={1}
					keyExtractor={(_item, index) => index.toString()}
					renderItem={this.renderItem}
					maxToRenderPerBatch={8}
					updateCellsBatchingPeriod={16}
					initialNumToRender={8}
					windowSize={2}
					removeClippedSubviews={true}
				/>
				<Snackbar
					theme={AppTheme.themeSnackbar}
					visible={this.state.visibleSnackbar}
					onDismiss={this.onDismissSnackBar}
					action={{
						label: 'Eliminar',
						onPress: () => {
							Utils.removeAllHistory();
							this.setRefreshing(true);
						},
					}}
				>
					Eliminar todo el historial
				</Snackbar>
			</>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		paddingTop: 32,
		paddingBottom: 32,
		marginLeft: 32,
		marginRight: 32,
	},
	title: {
		paddingTop: 10,
		width: '100%',
		textAlign: 'center',
	},
	voidtText: {
		color: '#ccd3d6',
	},
	viewVoidMessage: {
		alignItems: 'center',
		textAlign: 'center',
	},
	textDate: {
		paddingTop: 24,
		paddingBottom: 8,
		marginBottom: 16,
		borderBottomWidth: 2,
		borderBottomColor: '#FFAB00',
		fontSize: 18,
		color: '#FFAB00',
		fontFamily: 'Poppins-Bold',
		fontWeight: 'normal',
	},
	header: {
		width: '100%',
		paddingBottom: 24,
		position: 'relative',
	},
	iconRemoveAll: {
		position: 'absolute',
		right: 0,
		top: 0,
	},
	iconStyle: {
		margin: 32,
	},
});
