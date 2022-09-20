import { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

class Convesor extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>USB para BRL</Text>
                <TextInput
                    placeholder="Valor a ser convertido"
                    style={styles.areaInput}
                    onChangeText={() => {}}
                />
                <TouchableOpacity>
                    <Text>Converter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Convesor