import React,{Component} from 'react';
import { Text, Image, StyleSheet, Button, View } from "react-native";
import Header from '../components/Header'


const styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })

  const title ='People'
export default class Meetings extends Component{

    render() {
        return (
          <View >
          <Header title={title}></Header>
        <Text> welcome to MeetingRoom screen</Text>
      </View>
        );
      }
    }


