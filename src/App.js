import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppTheme from "./theme/AppTheme";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/appbar/BottomNavigation";
import AppBar from "./components/appbar/AppBar";
import SplashScreenView from "./views/SplashScreen/SplashScreenView";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
    fontFamily: "Poppins-Regular",
  },
});

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const time = 1;

  setTimeout(() => setHideSplashScreen(true), time * 1000);

  return (
    <View style={styles.mainView}>
      <StatusBar
        animated={AppTheme.statusBar.animated}
        backgroundColor={AppTheme.statusBar.backgroundColor}
        barStyle={AppTheme.statusBar.barStyle}
        hidden={AppTheme.statusBar.hidden}
        translucent={AppTheme.statusBar.translucent}
      />
      {!hideSplashScreen ? (
        <SplashScreenView />
      ) : (
        <>
          <AppBar />
          <NavigationContainer>
            <BottomNavigation />
          </NavigationContainer>
        </>
      )}
    </View>
  );
};

export default App;
