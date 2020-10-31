import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AppTheme from '../theme/AppTheme';
import { Text, TextInput, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  viewStyle:{
    fontSize: 25,
    padding:32,
  },
  input: {
    color:"#FFF",
    marginTop:16,
  },
  txtResultado: {
    height:36,
    lineHeight:42,
    marginBottom:24,
    marginTop:24,
    fontWeight: 'normal',
    fontFamily: 'Poppins-Bold',
    fontSize:18,
    backgroundColor: '#0ad8c5',
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 36,
  },
  gridContainer: {
    marginLeft:-5,
    marginRight:-5,
  },
  btn: {
    flex:1,
    flexDirection: 'column',
    margin:5,
  },
});

const calcFact = (factor, tasa, n) =>{
  let resultado = 0.0;
  let i = tasa/100.0;
  switch (factor) {
    case 'F/P':
        resultado = Math.pow(1.0+i, n);
      break;
    case 'P/F':
        resultado = 1.0/Math.pow(1.0+i, n);
      break;
    case 'F/A':
        resultado = (Math.pow(1.0+i, n) - 1.0)/i;
      break;
    case 'A/F':
        resultado = i/(Math.pow(1.0+i, n) - 1.0);
      break;
    case 'P/A':
        resultado = (Math.pow(1.0+i, n) - 1)/(Math.pow(1.0+i, n)*i);
      break;
    case 'A/P':
        resultado = (Math.pow(1.0+i, n)*i)/(Math.pow(1.0+i, n) - 1);
      break;
    case 'A/G':
        resultado =  (1/i) - (n/(Math.pow(1.0+i, n) - 1));
      break;
      
  }
  return resultado;
}

const getColor = (factor) =>{
  let color = '#000';
  switch (factor) {
    case 'F/P':
        color = '#36b4fc';
      break;
    case 'P/F':
        color = '#35d693';
      break;
    case 'F/A':
        color = '#8960ff';
      break;
    case 'A/F':
        color = '#fd6086';
      break;
    case 'P/A':
        color = '#fea056';
      break;
    case 'A/P':
        color = '#43bcc8';
      break;
    case 'A/G':
        color = '#d4304e';
      break;
      
  }
  return color;
}


export default class HomeView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      periodo:'',
      tasa:'',
      resultado:"Resultado",
    }
  }
  updatePeriodos = (nperiodos) => this.setState({periodo:nperiodos});

  updateTasa = (tasai) => this.setState({tasa:tasai});
  
  updateRessultado = (res) => this.setState({resultado:res});
  
  getPeriodo = () => {return this.state.periodo;}

  getTasa = () => {return this.state.tasa};

  calcular = (factor) => {
    if(this.getTasa().length>0 && this.getPeriodo().length>0){
      this.updateRessultado(
        "( "+factor+" , "+this.getTasa()+"% , "+this.getPeriodo()+" )  =  "+
          (
            calcFact(factor,this.getTasa(),this.getPeriodo())
              .toFixed(5).replace(/0{5,5}$/, "")
          )
      )
    }
  }

  render(){

    let opcionesFactores = ['F/P','P/F','F/A','A/F','P/A','A/P','A/G'];

    return (
      <View style={styles.viewStyle}>
        <TextInput
          theme={AppTheme.themeInput}
          style={styles.input}
          keyboardType={'numeric'}
          mode="outlined"
          label="Numero de periodos (N)"
          value={String(this.state.periodo)}
          onChangeText={periodo => this.updatePeriodos(periodo)}
        />
        <TextInput
          theme={AppTheme.themeInput}
          style={styles.input}
          keyboardType={'numeric'}
          mode="outlined"
          label="Tasa de interes (%)"
          value={String(this.state.tasa)}
          onChangeText={tasa => this.updateTasa(tasa)}
        />


        <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        
        <FlatList
          data={opcionesFactores}
          style={styles.gridContainer}
          numColumns={2}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => (
            <Button
              style={{...styles.btn,backgroundColor: getColor(item)}}
              mode='contained' 
              onPress={() => this.calcular(item)}>
              ({item}, i, n)
            </Button>
          )}
        />
      </View>
    );
  }
};
