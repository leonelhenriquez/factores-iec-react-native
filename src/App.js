import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppTheme from './theme/AppTheme';
import SettingsView from './views/SettingsView/SettingsView';
import AppBar from './components/appbar/AppBar';
import BottomNavigation from './components/appbar/BottomNavigation';

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		fontFamily: 'Poppins-Regular',
		backgroundColor: AppTheme.theme.colors.background,
	},
});

function App() {
	return (
		<View style={styles.mainView}>
			<StatusBar
				animated={AppTheme.statusBar.animated}
				backgroundColor={AppTheme.statusBar.backgroundColor}
				barStyle={AppTheme.statusBar.barStyle}
				hidden={AppTheme.statusBar.hidden}
				translucent={AppTheme.statusBar.translucent}
			/>
			<AppBar />
			<NavigationContainer>
				<BottomNavigation />
			</NavigationContainer>
			<SettingsView />
		</View>
	);
}

export default App;
