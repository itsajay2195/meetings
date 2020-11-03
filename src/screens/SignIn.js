import React,{Component} from 'react';
import { Text,SafeAreaView ,Image, StyleSheet, Button, View } from "react-native";


const styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })

export default class People extends Component{

    render() {
        return (
            <View style={styles.container} >
            <Text> welcome to People screen</Text>
          </View>
        );
      }
    }


