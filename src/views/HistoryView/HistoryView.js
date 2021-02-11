import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListHistory from "../../utils/History/ListHistory";
import ItemHistory from "./ItemHistory";
import { IconButton, Snackbar, Text, Title } from "react-native-paper";
import HistoryIcon from "../../components/Icons/HistoryIcon";
import AppTheme from "../../theme/AppTheme";
import Utils from "../../utils/Utils";

const styles = StyleSheet.create({
  root: {
    padding: 32,
  },
  title: {
    paddingTop: 10,
    width: "100%",
    textAlign: "center",
  },
  voidtText: {
    color: "#ccd3d6",
  },
  viewVoidMessage: {
    alignItems: "center",
    textAlign: "center",
  },
  textDate: {
    paddingTop: 24,
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#FFAB00",
    fontSize: 18,
    color: "#FFAB00",
    fontFamily: "Poppins-Bold",
    fontWeight: "normal",
  },
  header: {
    width: "100%",
    paddingBottom: 24,
    position: "relative",
  },
  iconRemoveAll: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default class HistoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      visibleSnackbar: false,
    };
  }

  setRefreshing = (refreshing) => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: true }), 10);
  };

  showSnackBar = () => this.setState({ visibleSnackbar: true });

  onDismissSnackBar = () => this.setState({ visibleSnackbar: false });

  render() {
    let prevFactor = undefined;
    return (
      <>
        <FlatList
          refreshing={this.state.refreshing}
          ListHeaderComponent={
            <View style={styles.header}>
              <Title style={styles.title}>Historial</Title>
              {ListHistory.length > 0 && (
                <IconButton
                  icon="delete-sweep-outline"
                  style={styles.iconRemoveAll}
                  onPress={() => this.showSnackBar()}
                />
              )}
            </View>
          }
          ListFooterComponent={
            ListHistory.length == 0 && (
              <View style={styles.viewVoidMessage}>
                <HistoryIcon size={32} color="#B0BEC5" style={{ margin: 32 }} />
                <Text style={styles.voidtText}>No hay historial</Text>
              </View>
            )
          }
          contentContainerStyle={styles.root}
          data={ListHistory}
          numColumns={1}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item, index }) => {
            let dateShow = undefined;

            if (index == 0) {
              dateShow = item.getDate();
            } else if (
              typeof prevFactor != "undefined" &&
              (prevFactor.getDate().day != item.getDate().day ||
                prevFactor.getDate().month != item.getDate().month ||
                prevFactor.getDate().year != item.getDate().year)
            ) {
              dateShow = item.getDate();
            }

            prevFactor = item;

            if (index == ListHistory.length - 1) {
              prevFactor = undefined;
            }

            return (
              <>
                {typeof dateShow != "undefined" && (
                  <Text style={styles.textDate}>
                    {dateShow.day}/{dateShow.month}/{dateShow.year}
                  </Text>
                )}
                <ItemHistory history={item} onRefresh={this.setRefreshing} />
              </>
            );
          }}
        />
        <Snackbar
          theme={AppTheme.themeSnackbar}
          visible={this.state.visibleSnackbar}
          onDismiss={this.onDismissSnackBar}
          action={{
            label: "Eliminar",
            onPress: () => {
              Utils.removeAllHistory();
              this.setRefreshing(true);
            },
          }}
        >
          Eliminar todo el historial
        </Snackbar>
      </>
    );
  }
}
