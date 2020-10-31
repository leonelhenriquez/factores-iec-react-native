/**
 * @format
 */
import * as React from 'react'
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
import AppTheme from './src/theme/AppTheme';
import {name as appName} from './src/app.json';

export default function MainApp(){
  return(
    <PaperProvider theme={AppTheme.theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
