import * as React from "react";
import { View, FlatList } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import AppTheme from "../../theme/AppTheme";
import styles from "./StylesCalculatorView";
import Settings from "../../Settings";
import Utils from "../../utils/Utils";
import Factor from "../../utils/Factors/Factor";
import CalculateFactor from "../../utils/Factors/CalculateFactor";
import { OptionsFactorsArray } from "../../utils/Factors/OptionsFactors";
import ColorFactor from "../../utils/Factors/ColorFactor";
import NumberResolver from "../../utils/NumberResolver";
import CalculatorEvent from "./Event/CalculatorEvent";

export default class CalculatorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      period: "",
      interestRate: "",
      result: "Resultado",
      enabledButtons: true,
    };
    this.factorPrev = undefined;
  }

  componentDidMount() {
    CalculatorEvent.addShowFactorEvent((factor) => {
      this.updatePeriod(factor.getPeriod().toString());
      this.updateInterestRate(factor.getInterestRate().toString());
      this.updateResult(factor);
      this.setState({ ...this.state });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.period != this.state.period ||
      prevState.interestRate != this.state.interestRate
    ) {
      this.setEnabledButtons();
    }
  }

  updatePeriod = (nperiodos) => this.setState({ period: nperiodos });

  updateInterestRate = (tasai) => this.setState({ interestRate: tasai });

  updateResult = (factor) => {
    this.setState({
      result:
        "( " +
        factor.getFactor() +
        " , " +
        factor.getInterestRate() +
        "% , " +
        factor.getPeriod() +
        " )  =  " +
        factor.getResult(),
    });
  };

  getPeriod = () => {
    return this.state.period;
  };

  getInterestRate = () => {
    return this.state.interestRate;
  };

  calcular = (typeFactor) => {
    if (this.getInterestRate().length > 0 && this.getPeriod().length > 0) {
      let factorObj = new Factor(
        typeFactor,
        NumberResolver(this.getPeriod()),
        NumberResolver(this.getInterestRate())
      );

      factorObj.setResult(CalculateFactor(factorObj));

      if (Number.isNaN(factorObj.getResult())) {
        factorObj.setResult("Error");
      } else if (!Number.isFinite(factorObj.getResult())) {
        factorObj.setResult("∞");
      } else {
        factorObj.setResult(
          Number.parseFloat(factorObj.getResult()).toFixed(
            Settings.decimal_precision
          )
        );

        if (!factorObj.equals(this.factorPrev)) {
          this.factorPrev = Object.assign({}, factorObj);
          Utils.addHistory(factorObj);
        }
      }

      this.updateResult(factorObj);
    }
  };

  setEnabledButtons = () => {
    this.setState({
      enabledButtons:
        this.getInterestRate().length == 0 || this.getPeriod().length == 0,
    });
  };

  render() {
    const getItem = ({ item }) => {
      return (
        <Button
          style={{ ...styles.btn, backgroundColor: ColorFactor.getColor(item) }}
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
            keyboardType="numeric"
            mode="outlined"
            label="Numero de periodos (N)"
            value={String(this.state.period)}
            onChangeText={(periodo) => {
              this.updatePeriod(periodo);
            }}
            maxLength={10}
          />

          <TextInput
            theme={AppTheme.themeInput}
            style={styles.input}
            keyboardType="numeric"
            mode="outlined"
            label="Tasa de interes (%)"
            value={String(this.state.interestRate)}
            onChangeText={(interestRate) =>
              this.updateInterestRate(interestRate)
            }
            maxLength={10}
          />

          <Text style={styles.txtResultado}>{this.state.result}</Text>
        </View>
      );
    };

    return (
      <FlatList
        ListHeaderComponent={getHeader()}
        contentContainerStyle={styles.gridContainer}
        data={OptionsFactorsArray}
        numColumns={2}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={getItem}
      />
    );
  }
}
