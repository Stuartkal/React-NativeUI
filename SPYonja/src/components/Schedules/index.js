import React, {Component} from 'react';
import {View, Text, Image,TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles';

export default class Schedules extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.row1}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>J</Text>
                        </View>
                        <View>
                            <Text style={styles.txt1}>Jada Moureen</Text>
                            <Text style={styles.txt2}>Pickup Point</Text>
                            <Text style={styles.txt1}>Ggaba</Text>
                            <Text style={styles.txt2}>HouseHold</Text>
                        </View>
                    </View>  
                    <View style={styles.separator}/>  
                    <View style={styles.row2}>
                        <View style={styles.column1}>
                            <Text style={styles.txt2}>Distance</Text>
                            <Text style={styles.txt1}>8km</Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.txt2}>Date</Text>
                            <Text style={styles.txt1}>6 June 2019</Text>
                        </View>
                        <View style={styles.column3}>
                            <Icon name='phone' size={30} color='white'/>
                        </View>
                    </View>   
                </View>
            </View>
        )
    }
}