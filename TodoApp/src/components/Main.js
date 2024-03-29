import React,{Component} from 'react'
import {View,TouchableOpacity,TextInput,ScrollView,StyleSheet,Text} from 'react-native'
import Note from './Note'
export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            noteArray:[],
            noteText:'',
        }
    }
    render(){
        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyVal={key} val={val} deleteMethod={()=> this.deleteNote(key)}/>
        });
        return(
            <View style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.headetText}>To Do List</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.textInput}
                    placeholder="Enter Text"
                    onChangeText={(noteText)=> this.setState({noteText})}
                    value={this.state.noteText}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    ></TextInput>
                </View>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
    addNote(){
        if(this.state.noteText){
            var d= new Date();
            this.state.noteArray.push({ 
                'date': d.getFullYear() + 
                "/" + (d.getMonth() + 1) + 
                "/" + d.getDate(),
                'note':this.state.noteText
            });
            this.setState({noteArray:this.state.noteArray})
            this.setState({noteText:''});
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#D2691E',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:7,
        borderBottomColor:'#FFF5DEB3'
    },
    headetText:{
        color:'white',
        fontSize:18,
        padding:26
    },
    scrollContainer:{
        flex:1,
        marginBottom:100
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10
    },
    textInput:{
        alignSelf:'stretch',
        color:'#fff',
        backgroundColor:'#252525',
        borderTopWidth:4,
        borderTopColor:'#25383C'
    },
    addButton:{
        position:'absolute',
        zIndex:10,
        right:10,
        bottom:90,
        backgroundColor:'#D2691E',
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
    },
    addButtonText:{
        color:'white',
        fontSize:24
    }
})