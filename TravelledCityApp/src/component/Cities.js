import React from 'react'
import {View,Text,StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {colors} from './theme'
import City from './City'

export default class Cities extends React.Component{

    viewCity = (city) => {
      this.props.navigation.navigate('City',{city})
    }
    render(){
        console.log('props',this.props)
        return(
            <ScrollView>
          
              {
                  this.props.screenProps.cities.map((city,index) =>(
                <View> 
                     <TouchableOpacity
                     onPress={() => this.viewCity(city)}
                     >
                       <View style={styles.cityView}>
                            <Text style={styles.cityName}>{city.city}</Text>
                            <Text style={styles.countryName}>{city.country}</Text>
                       </View>  
                     </TouchableOpacity>
                </View>     
                 ))
              }
          
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cityView:{
     padding:10,
     borderBottomWidth:1,
     borderBottomColor:'#D3D3D3',
     margin:10
    },
    cityName:{
    fontSize:20,
    fontWeight:'bold'
    },
    countryName:{
    color:'rgba(0,0,0,.5)'
    },
    deleteButton:{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      top:10,
      bottom:10,
      right:10,
      padding:10,
      backgroundColor:colors.primary
    }
})