import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeView from '../../views/Home';

const style = StyleSheet.create({
  bottomNav:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  }
});


const HelpView = () => {
  return(  
    <Text>Help view</Text>
  );
};



export default class BottomNavigationNanodev extends React.Component{

  constructor(props){
    super(props);
  }

  state = {
    index: 0,
    routes: [
      {key: 'home'  , title: 'Inicio'  , icon: 'home'   , color: '#3F51B5' },
      {key: 'help'  , title: 'Help'    , icon: 'help'   , color: '#3F51B5' },
    ],
  };

  handleIndexChange = index => this.setState({index});

  renderScene = BottomNavigation.SceneMap({
    home: HomeView,
    help: HelpView,
  });

  render() {
    return (
        <BottomNavigation 
          style={style.bottomNav}
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          shifting={true}
      />
    );
  }
}


