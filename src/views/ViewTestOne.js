import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { Text, Card } = require("react-native-paper");

const styles = StyleSheet.create({
  viewStyle:{
    fontSize: 25,
  }
});

const ViewTestOne = () => {
  return (
    <View style={styles.viewStyle}>
        <Text>
          Hola Mundo
        </Text>
    </View>
  );
};

export default ViewTestOne;