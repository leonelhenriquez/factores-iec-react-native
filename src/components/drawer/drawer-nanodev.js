import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewTestOne from '../../views/ViewTestOne';
import { Drawer } from 'react-native-paper';

const styles = StyleSheet.create({
  drawerScroll:{
    position: 'absolute',
    top:100,
    bottom:0,
    left:0,

  },
});


const DrawerContent = () =>{
  return (
    <ScrollView >
      <Drawer.Section title="titulo" >
        <Drawer.Item 
          label="Primero"
        />
      </Drawer.Section>
    </ScrollView>
  );
}


const RouteConfigs = {
  Home: {
    screen: ViewTestOne,
  },
};

const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  contentComponent: DrawerContent,
}

const DrawerNanodev = createDrawerNavigator(RouteConfigs,DrawerNavigatorConfig);

export default DrawerNanodev;

/*export default function DrawerNanodev(){
  return (
    <DrawerMain.Navigator>
    </DrawerMain.Navigator>
  );
}*/

