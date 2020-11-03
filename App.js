import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
import React,{Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Signin from './src/screens/SignIn';
import Meetings from './src/screens/Meetings';
import Home from './src/screens/Home';
import MeetingRooms from './src/screens/MeetingRooms';
import People from './src/screens/People';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import Header from './src/components/Header'
// import Meetings from './src/screens/HomeDetail';

// const nav = createStackNavigator({
//   // the key can be anything we want, can be search or anything
//   // Search: SearchScreen,
//   // ResultDetail: ResultsShowScreen,
//   Signin:Signin,
//   Meeting:Meetings
// }, {
//   initialRouteName: 'Signin',
//   defaultNavigationOptions: {
//     title: 'Login'
//   }
// });

const HomeStack = createStackNavigator({
  Home:{
    screen:Home
  },
  HomeDetail:{
    screen:HomeStack
  }
})

const Tab = createMaterialBottomTabNavigator(
  {
    Home:{
      screen:Home,
      navigationOptions:{  
        headerTitle: () => <Header/>,
        tabBarLabel:'Home',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
            </View>),  
    }
  
      },
    Meetings:{
      screen:Meetings,
      navigationOptions:{  
        title:'Test',
        tabBarLabel:'Meetings',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'md-videocam'}/>  
            </View>),  
    }
    },
    People:{
      screen:People,
      navigationOptions:{  
        tabBarLabel:'People',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-people'}/>  
            </View>),  
    } },
    MeetingRooms:{
      screen:MeetingRooms,
      navigationOptions:{  
        tabBarLabel:'MeetingRooms',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'md-briefcase'}/>  
            </View>),  
    }},
  },{
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);
// const AppContainer =createAppContainer(Tab)
export default createAppContainer(Tab);

// the app.js is the speciall file in react native, whatever is exported in this page will be displayed first