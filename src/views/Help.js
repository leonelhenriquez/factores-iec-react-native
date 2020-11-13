import * as React from "react";
import { Linking, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import AppTheme from "../theme/AppTheme";

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    padding: 32,
  },
  button: {
    fontSize: 20,
  },
  latexSyle: {
    width: "100%",
    height: 100,
  },
  titleApp: {
    height: 36,
    lineHeight: 42,
    fontWeight: "normal",
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 36,
  },
});

const mmlOptions = {
  jax: ["input/MathML"],
};

export default class HelpView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.titleApp}>Factores IEC</Text>
        <Text>Version 1.0</Text>

        <Button
          theme={AppTheme.themeButton}
          labelStyle={styles.button}
          style={{ marginTop: 100 }}
          icon="github"
          mode="text"
          onPress={() =>
            Linking.openURL(
              "https://github.com/leonelhenriquez/factores-iec-react-native"
            )
          }
        >
          Github
        </Button>
      </View>
    );
  }
}
