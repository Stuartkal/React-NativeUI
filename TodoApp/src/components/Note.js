import React,{Component} from 'react'
import {View,TouchableOpacity,TextInput,StyleSheet,Text} from 'react-native'

export default class Note extends Component{
    render(){
        return(
            <View key={this.props.keyVal} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

            <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  note:{
    position:'relative',
    padding:20,
    paddingRight:200,
    borderBottomWidth:2,
    borderBottomColor:'#ededed'
  },
  noteText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#E91E63'
  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    top:10,
    bottom:10,
    right:10,
    backgroundColor:'#D2691E'
  },
  deleteText:{
    color:'white'
  }
})