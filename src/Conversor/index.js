import { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";

import {api} from "../Server/api"

//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

class Convesor extends Component {

    constructor(props){
        super(props)
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        }
        this.toConvert = this.toConvert.bind(this)
    }

    async toConvert(){
        let of_to = this.state.moedaA + '_' + this.state.moedaB
        const res = await api.get(`/convert?q=${of_to}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)
        let cotation = res.data[of_to]

        let result = (cotation + parseFloat(this.state.moedaB_valor))

        this.setState({valorConvertido: result.toFixed(2).toString().replace('.',',')})
        Keyboard.dismiss()
    }

    render(){

        const {moedaA, moedaB} = this.props

        return(
            <View style={styles.container}>
                <Text style={styles.title}>{moedaA} para {moedaB}</Text>
                <TextInput
                    placeholder="Valor a ser convertido"
                    style={styles.areaInput}
                    onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.btnContainer} onPres={this.toConvert}>
                    <Text style={styles.btnText}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.valueConverted}>
                    R$ {this.state.valorConvertido === 0 ? '' : this.state.valorConvertido}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000"
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    btnContainer: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    valueConverted: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000",
        marginTop: 15,
    }
})

export default Convesor