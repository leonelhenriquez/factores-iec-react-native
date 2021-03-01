import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Colors } from "react-native-paper";
import AppTheme from "../../theme/AppTheme";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import AdBanner from "../../admob/AdBanner";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppTheme.theme.colors.background,
  },
  appTitle: {
    fontWeight: "normal",
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    paddingTop: 64,
    paddingBottom: 32,
  },
  appLogo: {
    resizeMode: "cover",
    width: 100,
    height: 100,
  },
});

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.appLogo}
        source={require("../../assets/logo/logo.png")}
      />
      <Text style={styles.appTitle}>Factores IEC</Text>
      <ProgressBar indeterminate progress={0.5} color={Colors.blueGrey400} />
      <View
        style={{
          marginLeft: 0,
          marginRight: 0,
          overflow: "hidden",
          width: 0,
          height: 0,
        }}
      >
        <AdBanner />
      </View>
    </View>
  );
};

export default SplashScreenView;
