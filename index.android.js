/**
 * @format
 */
import * as React from 'react'
import {AppRegistry, StatusBar, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
import AppTheme from './src/theme/AppTheme';
import {name as appName} from './src/app.json';

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop:StatusBar.currentHeight,
  },
});

export default function MainApp(){
  return(
    <PaperProvider theme={AppTheme.theme} styles={styles.mainView}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
