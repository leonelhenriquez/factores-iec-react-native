/**
 * Autor: Leonel Henriquez
 */
import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar as AppbarPaper } from "react-native-paper";

const styles = StyleSheet.create({
  appbar: {
    position: "relative",
    left: 0,
    right: 0,
    padding: 0,
  },
  title: {
    paddingLeft: 0,
    marginLeft: 0,
  },
});

export default class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentHeight: 0 };
  }

  render() {
    return (
      <AppbarPaper style={styles.appbar}>
        <AppbarPaper.Action icon="cash" />
        <AppbarPaper.Content title="Factores IEC" style={styles.title} />
      </AppbarPaper>
    );
  }
}
