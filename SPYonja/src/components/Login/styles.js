import {React} from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#0e0e0e"
    },
    imgView:{
        paddingTop:70,
        alignItems:"center",
        marginBottom:10
    },
    img:{
        width:200,
        height:200,
    },
    logoView:{
        alignItems:'center',
        marginBottom:5
    },
    logoText:{
        color:'#FEA30D',
        fontSize:35,  
    },
    hr:{
        height:2,
        width:200,
        backgroundColor:'#FEA30D' 
    },
    inputView:{
        borderRadius:20,
        height:100,
        width:350,
        backgroundColor:'white',
        alignItems:'center',
        paddingTop:20,
        marginBottom:30
    },
   txtView:{
       flexDirection:'row',
       
       width:300    
   },
   txt:{
       fontSize:20,
       color:'rgba(0,0,0,.2)',
       margin:20
   },
   txtInput:{
       fontSize:25,
       color:'#FEA30D',
       width:200
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