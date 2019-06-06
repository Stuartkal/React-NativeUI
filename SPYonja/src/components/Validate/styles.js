import {React} from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#0e0e0e"
    },
    txtView:{
        alignItems:'center',
        paddingTop:100,
        marginBottom:60
    },
   txt:{
       fontSize:20,
       fontWeight:'bold',
       color:'white',
   },
   txt2:{
    fontSize:20,
    color:'white', 
},
    input:{
        flexDirection:'row',
        marginBottom:20,
        marginHorizontal:20
    },
    verifyInputBox:{
        borderRadius:50, 
        borderWidth: 1, 
        height:44,
        backgroundColor:"#3E3C3C",
    },
   button:{
    borderRadius:400, 
    height:50, 
    width:359,
    marginBottom:10,
    alignItems:"center",
    backgroundColor:'#FEA30D',
    paddingTop:5
},
   btnText:{
       fontSize:30,
       color:'white'
   }
})

export default styles;