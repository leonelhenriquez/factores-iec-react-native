import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AppTheme from "../theme/AppTheme";
import { Text, TextInput, Button } from "react-native-paper";

const styles = StyleSheet.create({
  viewStyle: {
    fontSize: 25,
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
    color: "#FFF",
    marginTop: 16,
  },
  txtResultado: {
    marginBottom: 24,
    marginTop: 24,
    fontWeight: "normal",
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    backgroundColor: "#0ad8c5",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 36,
  },
  gridContainer: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 32,
    paddingTop: 8,
  },
  btn: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
  },
});

const calcFact = (factor, tasa, n) => {
  let resultado = 0.0;
  let i = tasa / 100.0;
  switch (factor) {
    case "F/P":
      resultado = Math.pow(1.0 + i, n);
      break;
    case "P/F":
      resultado = 1.0 / Math.pow(1.0 + i, n);
      break;
    case "F/A":
      resultado = (Math.pow(1.0 + i, n) - 1.0) / i;
      break;
    case "A/F":
      resultado = i / (Math.pow(1.0 + i, n) - 1.0);
      break;
    case "P/A":
      resultado = (Math.pow(1.0 + i, n) - 1) / (Math.pow(1.0 + i, n) * i);
      break;
    case "A/P":
      resultado = (Math.pow(1.0 + i, n) * i) / (Math.pow(1.0 + i, n) - 1);
      break;
    case "A/G":
      resultado = 1 / i - n / (Math.pow(1.0 + i, n) - 1);
      break;
  }

  if (Number.isFinite(resultado)) {
    resultado = "∞";
    console.log("es infinito");
  } else if (Number.isNaN(resultado)) {
    resultado = "Error";
  } else {
    resultado
      .toString()
      .toFixed(5)
      .replace(/0{5,5}$/, "");
  }

  return resultado;
};

const getColor = (factor) => {
  let color = "#000";
  switch (factor) {
    case "F/P":
      color = "#36b4fc";
      break;
    case "P/F":
      color = "#35d693";
      break;
    case "F/A":
      color = "#8960ff";
      break;
    case "A/F":
      color = "#fd6086";
      break;
    case "P/A":
      color = "#fea056";
      break;
    case "A/P":
      color = "#43bcc8";
      break;
    case "A/G":
      color = "#d4304e";
      break;
  }
  return color;
};

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periodo: "",
      tasa: "",
      resultado: "Resultado",
      enabledButtons: true,
    };
  }
  updatePeriodos = (nperiodos) => {
    this.setState({ periodo: nperiodos });
    this.setEnabledButtons();
  };

  updateTasa = (tasai) => {
    this.setState({ tasa: tasai });
    this.setEnabledButtons();
  };

  updateRessultado = (res) => this.setState({ resultado: res });

  getPeriodo = () => {
    return this.state.periodo;
  };

  getTasa = () => {
    return this.state.tasa;
  };

  calcular = (factor) => {
    if (this.getTasa().length > 0 && this.getPeriodo().length > 0) {
      this.updateRessultado(
        "( " +
          factor +
          " , " +
          this.getTasa() +
          "% , " +
          this.getPeriodo() +
          " )  =  " +
          calcFact(factor, this.getTasa(), this.getPeriodo())
      );
    }
  };

  setEnabledButtons = () => {
    setTimeout(() => {
      this.setState({
        enabledButtons:
          this.getTasa().length == 0 || this.getPeriodo().length == 0,
      });
    }, 1);
  };

  render() {
    let opcionesFactores = ["F/P", "P/F", "F/A", "A/F", "P/A", "A/P", "A/G"];

    const getItem = ({ item }) => {
      return (
        <Button
          theme={AppTheme.themeButton}
          style={{ ...styles.btn, backgroundColor: getColor(item) }}
          mode="contained"
          onPress={() => this.calcular(item)}
          disabled={this.state.enabledButtons}
        >
          ({item}, i, n)
        </Button>
      );
    };

    const getHeader = () => {
      return (
        <View style={styles.viewStyle}>
          <TextInput
            theme={AppTheme.themeInput}
            style={styles.input}
            keyboardType={"numeric"}
            mode="outlined"
            label="Numero de periodos (N)"
            value={String(this.state.periodo)}
            onChangeText={(periodo) => this.updatePeriodos(periodo)}
            maxLength={20}
          />

          <TextInput
            theme={AppTheme.themeInput}
            style={styles.input}
            keyboardType={"numeric"}
            mode="outlined"
            label="Tasa de interes (%)"
            value={String(this.state.tasa)}
            onChangeText={(tasa) => this.updateTasa(tasa)}
            maxLength={20}
          />

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        </View>
      );
    };

    return (
      <FlatList
        nestedScrollEnabled={false}
        ListHeaderComponent={getHeader()}
        contentContainerStyle={styles.gridContainer}
        data={opcionesFactores}
        numColumns={2}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={getItem}
      />
    );
  }
}
