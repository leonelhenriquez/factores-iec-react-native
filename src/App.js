import * as React from 'react';
import { View, StatusBar } from 'react-native';
import AppTheme from './theme/AppTheme';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationNanodev from './components/appbar/bottom-navigation-nanodev';
import AppBarNanodev from './components/appbar/appbar';


function App(){
  return (
    <View>
      <StatusBar 
        animated={AppTheme.statusBar.animated}
        backgroundColor={AppTheme.statusBar.backgroundColor}
        barStyle={AppTheme.statusBar.barStyle}
        hidden={AppTheme.statusBar.hidden}
        translucent={AppTheme.statusBar.translucent}
      />
      <AppBarNanodev />
      <NavigationContainer >
        <BottomNavigationNanodev />
      </NavigationContainer>
    </View>
  );
};

export default App;