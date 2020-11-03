import React,{Component} from 'react';
import { Text, Image, StyleSheet, Button, View } from "react-native";
import Card from '../components/Rbox'
import Header from '../components/Header'

const styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"flex-start",
      alignItems:"flex-start",
      marginLeft:10
    }
  })
let data = 
// let data= 
  {
      "id": 1,
      "room": {
          "id": 1,
          "name": "room 1",
          "room_number": "1",
          "room_type": "conference",
          "location": "2nd Floor",
          "seating_capacity": 10,
          "Amenities": [
              1
          ]
      },
      "topic": "testing",
      "subject": "test",
      "time_from": "2020-10-27T09:35:23Z",
      "time_to": "2020-10-27T09:35:24Z",
      "people": [
          1,
          2
      ]
  }


const  Home =()=>{
        const title ='Home'
    
        return (
          
          <View >
            <Header title={title}></Header>
            <Text>hi</Text>
             <View style={styles.container}>
                <Card data={data}></Card>
             </View>
              
             

          </View>
          
        );
      }
 
export default Home;

