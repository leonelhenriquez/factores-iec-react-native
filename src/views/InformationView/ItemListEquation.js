import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Divider, List } from "react-native-paper";
import AppTheme from "../../theme/AppTheme";

const styles = StyleSheet.create({

  list: {
    marginTop: 4,
    width: "100%",
    alignItems: "center",
  },
  listTitle: {
    fontFamily: "Poppins-Bold",
    fontWeight: "normal",
    color: "#B0BEC5"
  },
  listItem: {
    padding: 0,
    margin: 0,
    opacity: 0.7,
  },
  imageRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
  },
  image: {
    width: 220,
    height: 55,
    resizeMode: "contain",
  },
});

export default class ItemListEquation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, source, id } = this.props;

    return (
      <>
        <List.Accordion
          theme={AppTheme.themeButton}
          style={styles.list}
          titleStyle={styles.listTitle}
          title={"• "+title}
          id={id}
        >
          <List.Item
            style={styles.listItem}
            title={
              <View style={styles.imageRoot}>
                <Image style={styles.image} source={source} />
              </View>
            }
          />
        </List.Accordion>
        <Divider />
      </>
    );
  }
}
