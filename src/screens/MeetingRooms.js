import React,{Component} from 'react';
import { Text, Image, StyleSheet, Button, View } from "react-native";
import card from '../components/Rbox'
import Header from '../components/Header'
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginLeft:10
  }
  })
  const title ='Meeting Room'

export default class MeetingRoom extends Component{
    
    render() {
        return (
            <View >
              <Header title={title}></Header>
            <Text> welcome to MeetingRoom screen</Text>
          </View>
        );
      }
    }


