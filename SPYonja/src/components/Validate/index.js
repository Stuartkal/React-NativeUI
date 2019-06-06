import React, {Component} from 'react';
import {View, Text, Image,TextInput, Button, TouchableOpacity, Input} from 'react-native'
import './styles'
import styles from './styles';

export default class Validate extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.txtView}>
                    <Text style={styles.txt}>Validate your mobile number</Text>
                    <Text style={styles.txt2}>We have sent an SMS with the OTP code</Text>
                    <Text style={styles.txt2}>to +256 794365816, </Text>
                </View>
                <View>
                    
                </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Validate</Text>
                    </TouchableOpacity>
                
            </View>
        )
    }
}