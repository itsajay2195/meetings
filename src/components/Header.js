import React,{Component} from 'react';
import { Text, Image, StyleSheet, Button, View } from "react-native";


export default function Header({title}){
    return(
        <View style={styles.header}>
            <View>
    <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>

    );
}

const styles= StyleSheet.create({
    header:{
        width: '100%',
        height: '25%',
        backgroundColor:'#694fad',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        letterSpacing:1
    }
} 
);