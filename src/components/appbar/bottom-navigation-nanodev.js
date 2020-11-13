import * as React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import HomeView from "../../views/Home";
import HelpView from "../../views/Help";
import AppTheme from "../../theme/AppTheme";

const style = StyleSheet.create({
  bottomNav: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  btnNavBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  nav: { backgroundColor: AppTheme.theme.colors.backgroundColor },
});

export default class BottomNavigationNanodev extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    index: 0,
    routes: [
      { key: "home", title: "Inicio", icon: "home" },
      { key: "help", title: "Help", icon: "information" },
    ],
  };

  handleIndexChange = (index) => {
    this.setState({ index: index });
  };

  renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <HomeView />;
      case "help":
        return <HelpView />;
    }
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        shifting={false}
        sceneAnimationEnabled={true}
        keyboardHidesNavigationBar={true}
        barStyle={style.btnNavBar}
      />
    );
  }
}
