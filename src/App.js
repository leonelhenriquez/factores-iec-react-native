import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppTheme from "./theme/AppTheme";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/appbar/BottomNavigation";
import AppBar from "./components/appbar/AppBar";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
    fontFamily: "Poppins-Regular",
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
    </View>
  );
}

export default App;
