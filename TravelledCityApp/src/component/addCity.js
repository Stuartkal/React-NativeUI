import React from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import uuidV4 from 'uuid/v4'
import {colors} from './theme'


export default class addCity extends React.Component{
    state={
        city:'',
        country:''
    }

    onChangeText = (key,value)=>{
        this.setState({
            [key]:value
        })
    }

    submit = () =>{
       if(this.state.city === '' || this.state.city === '') return
       const city =({
           city:this.state.city,
           country:this.state.country,
           locations:[],
           id:uuidV4
       })
       this.props.screenProps.addCity(city)
       this.setState({
           city:'',
           country:''
       }, () => {
           this.props.navigation.navigate('Cities')
       })
    }
    render(){
        
        return(
           <View>

               <Image source={require("../../assets/images/logo.png")} style={styles.imgSize}/>
               <View style={styles.formView}>
               <TextInput style={styles.textInput}
               placeholder="City"
               placeholderTextColor="#D3D3D3"
               value = {this.state.city}
               onChangeText = {val => this.onChangeText('city',val)}
               />
               <TextInput style={styles.textInput}
               placeholder="Location"
               placeholderTextColor="#D3D3D3"
               value = {this.state.country}
               onChangeText = {val => this.onChangeText('country',val)}
               />
               <TouchableOpacity onPress={this.submit} style={styles.buttonAdd}>
                   <Text>Add City</Text>
               </TouchableOpacity>
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({

    textInput:{
        
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3',
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        marginHorizontal:20, 
        paddingHorizontal:20
      },
      formView:{
          marginTop:10
      },
      buttonAdd:{
        backgroundColor:'#20639B',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        margin:20,
        marginHorizontal:20
      },
      imgSize:{
          height:200,
          width:300,
          marginTop:20,
          marginHorizontal:50
      }
     
})