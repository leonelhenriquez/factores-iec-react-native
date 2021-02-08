import * as React from "react";
import { Linking, ScrollView, StyleSheet, View, Image } from "react-native";
import { Button, List, Text } from "react-native-paper";
import Settings from "../../Settings";
import AppTheme from "../../theme/AppTheme";
import { OptionsFactors } from "../../utils/Factors/OptionsFactors";

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
  listItem: {
    padding: 0,
    margin: 0,
    opacity: 0.8,
    opacity: 1,
  },
  imageRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 220,
    height: 60,
    resizeMode: "contain",
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
            <List.AccordionGroup>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.P_F}
                id="1"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/f_p.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.P_F}
                id="2"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/p_f.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.F_A}
                id="3"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/f_a.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.A_F}
                id="4"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/a_f.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.P_A}
                id="5"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/p_a.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.A_P}
                id="6"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/a_p.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
              <List.Accordion
                theme={AppTheme.themeButton}
                style={styles.list}
                title={OptionsFactors.A_G}
                id="7"
              >
                <List.Item
                  style={styles.listItem}
                  title={
                    <View style={styles.imageRoot}>
                      <Image
                        style={styles.image}
                        source={require("../../assets/equations/a_g.png")}
                      />
                    </View>
                  }
                />
              </List.Accordion>
            </List.AccordionGroup>
          </List.Accordion>
        </View>
      </ScrollView>
    );
  }
}
