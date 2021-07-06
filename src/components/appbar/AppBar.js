/**
 * Autor: Leonel Henriquez
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar as AppbarPaper } from 'react-native-paper';
import SettingsEvent from '../../views/SettingsView/Event/SettingsEvent';

const styles = StyleSheet.create({
	appbar: {
		position: 'relative',
		left: 0,
		right: 0,
		padding: 0,
	},
	title: {
		paddingLeft: 0,
		marginLeft: 0,
	},
});

export default class AppBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentHeight: 0 };
	}

	render() {
		return (
			<Appbar style={styles.appbar}>
				<Appbar.Action icon="cash" />
				<Appbar.Content title="Factores IEC" style={styles.title} />
				<AppbarPaper.Action icon="cog" onPress={SettingsEvent.open} />
			</Appbar>
		);
	}
}
