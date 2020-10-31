/**
 * Autor: Leonel Henriquez
 */
import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {StyleSheet} from 'react-native'
import { Appbar } from "react-native-paper"

const styles = StyleSheet.create({
  appbar: {
    position:'relative',
    left:0,
    right:0,
    padding: 0,
  },
});

export default class AppBarNanodev extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentHeight: 0};
  }
  
  
  render(){
    return(
      <Appbar style={styles.appbar}>
        <Appbar.Content title="Factores IEC" />
      </Appbar>
    );
  }
}

