import * as React from "react";
import { Linking, ScrollView, StyleSheet, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import Settings from "../../Settings";
import AppTheme from "../../theme/AppTheme";

const styles = StyleSheet.create({
  viewStyle: {
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
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 36,
  },
  list: {
    marginTop: 24,
    width: "100%",
    alignItems: "center",
  },
});

export default class InformationView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Text style={styles.titleApp}>Factores IEC</Text>
          <Text>Version {Settings.version}</Text>
          <Button
            theme={AppTheme.themeButton}
            labelStyle={styles.button}
            style={{ marginTop: 50 }}
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
          <List.Accordion
            theme={AppTheme.themeButton}
            style={styles.list}
            title="Ecuaciones"
            left={(props) => <List.Icon {...props} icon="square-root" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </View>
      </ScrollView>
    );
  }
}
