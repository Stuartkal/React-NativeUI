import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#F9F9F9',
        padding:30,
    },
    card:{
        backgroundColor:'white',
        width:370,
        height:200,
        borderRadius:10,
        elevation: 5,
           
    },
    row1:{
        flexDirection:'row',
        padding:10,
        marginBottom:10
    },
    row2:{
        flexDirection:'row',
        padding:10,
        paddingLeft:40,
        marginBottom:10
    },
    avatar:{
        borderRadius:600,
        height:100,
        width:100,
        backgroundColor:'#FEA30D',
        marginRight:20,
        alignItems:"center",
        elevation:5
    },
    avatarText:{
        fontSize:90,
        color:'white'
    },
    txt1:{
        fontSize:25,
        fontWeight:'400',
    },
    txt2:{
        fontSize:18,
        color:'rgba(0,0,0,.2)'
    },
    separator:{
        height:1,
        backgroundColor:'rgba(0,0,0,.2)'
    },
    column1:{
        alignItems:'center',
        marginRight:40,
    },
    column2:{
        alignItems:'center',
        marginRight:40,
    },
    column3:{
        alignItems:'center',
        borderRadius:600,
        height:50,
        width:50,
        backgroundColor:'#FEA30D',
        paddingTop:10,
        elevation:5
    },

})
 
    export default styles;
