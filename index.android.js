/**
 * @autor Leonel Henriquez
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import AppTheme from './src/theme/AppTheme';
import { name as appName } from './src/app.json';
import Utils from './src/utils/Utils';

export default class MainApp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Utils.loadSettins();
		setTimeout(Utils.loadHistory, 0);
	}

	render() {
		return (
			<PaperProvider theme={AppTheme.theme}>
				<App />
			</PaperProvider>
		);
	}
}

AppRegistry.registerComponent(appName, () => MainApp);
