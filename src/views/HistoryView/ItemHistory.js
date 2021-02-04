import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconButton, List, Text } from "react-native-paper";
import BottomNavigationEvent from "../../components/appbar/Event/BottomNavigationEvent";
import Utils from "../../utils/Utils";
import CalculatorEvent from "../CalculatorView/Event/CalculatorEvent";

const styles = StyleSheet.create({
  root: {
    padding: 12,
    borderWidth: 2,
    borderColor: "rgba(176,190,1975, 0.2)",
    borderRadius: 5,
  },
  item: {
    color: "#B0BEC5",
    fontWeight: "bold",
    fontSize: 16,
    borderWidth: 2,
    borderColor: "rgba(176,190,1975, 0.2)",
    borderRadius: 5,
    marginBottom: 8,
  },
  itemTitle: {
    color: "#B0BEC5",

    fontFamily: "Poppins-Regular",
    fontWeight: "normal",
  },
});

const ItemHistory = ({ history, onRefresh }) => {
  return (
    <List.Item
      style={styles.item}
      titleStyle={styles.itemTitle}
      title={`( ${history.getFactor()} , ${history.getInterestRate()}% , ${history.getPeriod()} ) = ${history.getResult()}`}
      right={(props) => (
        <IconButton
          {...props}
          icon="delete"
          size={24}
          onPress={() => {
            Utils.removeHistory(history);
            onRefresh(true);
          }}
        />
      )}
      onPress={() => {
        CalculatorEvent.showFactor(history);
        BottomNavigationEvent.handleIndexChange(0);
      }}
    />
  );
};

export default ItemHistory;
