import React, { Component } from 'react';
 
import { StyleSheet, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
const Card =({data})=> {
 
    console.warn(data['room']['name'])
    return (
      <View >
        {/* <View style={styles.RectangleShapeView} /> */}
        <TouchableOpacity style={styles.container}>
        <Text>hfi</Text>
        <Text>ji</Text>
        <Text>{data['room']['name']}</Text>
        </TouchableOpacity>
      </View>
    );
  }

 
 
const styles = StyleSheet.create({
 
  container: {
 
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    marginTop: 20,
    borderRightWidth:3,
    borderColor:'blue',
    width: 120 * 3,
    height: 120,
    backgroundColor: 'white',
    borderTopLeftRadius:  5
  },
 

 
  RectangleShapeView: {
  marginTop: 20,
  width: 120 * 2,
  height: 120,
  backgroundColor: 'white'
 
  }
 
});

export default Card;