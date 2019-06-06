import React, {Component} from 'react';
import {View, Text, Image,TextInput, Button, TouchableOpacity} from 'react-native'

import styles from './styles';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={require("../../assets/images/logo.png")}/>
                </View>
                <View style={styles.logoView}>
                    <Text style={styles.logoText}>Login</Text>
                </View>
                <View style={styles.hr}/>
                <View style={styles.inputView}>
                    <View style={styles.txtView}>
                        <Text style={styles.txt}>Mobile Number</Text>
                        <TextInput style={styles.txtInput}
                        placeholder='+256 00000000'
                        keyboardType='phone-pad'
                        />
                    </View>
                </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                
            </View>
        )
    }
}