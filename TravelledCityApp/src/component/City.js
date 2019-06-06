import React from 'react'
import {View,Text,StyleSheet,TouchableWithoutFeedback,ScrollView,TextInput} from 'react-native'
import {colors} from './theme'
export default class City extends React.Component{
    static navigstionOptions = (props) => ({
       title: props.navigation.state.params.City.name
    })
    render(){
        return(
          <View>
              
          </View>
        )
    }
}