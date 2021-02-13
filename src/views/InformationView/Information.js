import * as React from "react";
import { Linking, ScrollView, StyleSheet, View } from "react-native";
import { Button, List, Menu, Text } from "react-native-paper";
import AdBanner from "../../admob/AdBanner";
import Settings from "../../Settings";
import AppTheme from "../../theme/AppTheme";
import { OptionsFactors } from "../../utils/Factors/OptionsFactors";
import ItemListEquation from "./ItemListEquation";

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    fontSize: 25,
    paddingTop: 32,
    paddingBottom: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  buttonLabel: {
    fontSize: 20,
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
  },
  titleApp: {
    height: 36,
    lineHeight: 42,
    fontWeight: "normal",
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 36,
  },
  list: {
    marginTop: 32,
    width: "100%",
    alignItems: "center",
  },
  listTitle: {
    fontFamily: "Poppins-Bold",
    fontWeight: "normal",
  },
});

export default class InformationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Text style={styles.titleApp}>Factores IEC</Text>
          <Text>Version {Settings.version}</Text>
          <List.Accordion
            theme={AppTheme.themeButton}
            style={styles.list}
            titleStyle={styles.listTitle}
            title="Ecuaciones"
            left={(props) => <List.Icon {...props} icon="square-root" />}
            expanded={this.state.expanded}
            onPress={() => this.setState({ expanded: !this.state.expanded })}
            description="Lista de ecuaciones"
          >
            <List.AccordionGroup>
              <ItemListEquation
                id="1"
                title={OptionsFactors.F_P}
                source={require("../../assets/equations/f_p.png")}
              />
              <ItemListEquation
                id="2"
                title={OptionsFactors.P_F}
                source={require("../../assets/equations/p_f.png")}
              />
              <ItemListEquation
                id="3"
                title={OptionsFactors.F_A}
                source={require("../../assets/equations/f_a.png")}
              />
              <ItemListEquation
                id="4"
                title={OptionsFactors.A_F}
                source={require("../../assets/equations/a_f.png")}
              />
              <ItemListEquation
                id="5"
                title={OptionsFactors.P_A}
                source={require("../../assets/equations/p_a.png")}
              />
              <ItemListEquation
                id="6"
                title={OptionsFactors.A_P}
                source={require("../../assets/equations/a_p.png")}
              />
              <ItemListEquation
                id="7"
                title={OptionsFactors.A_G}
                source={require("../../assets/equations/a_g.png")}
              />
            </List.AccordionGroup>
          </List.Accordion>
          <Button
            theme={AppTheme.themeButton}
            labelStyle={styles.buttonLabel}
            style={styles.button}
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
          <AdBanner />
        </View>
      </ScrollView>
    );
  }
}
