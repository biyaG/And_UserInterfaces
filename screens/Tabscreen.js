import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import Profilescreen from './Profilescreen';
import Notification from './Notification';
import Sharescreen from './Sharescreen';
import Privatescreen from './Privatescreen';
import ScheduleScreen from './ScheduleScreen';
import Rootstackscreen from './Rootstackscreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContent } from './DrawerContent'


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const Drawer = createDrawerNavigator();
const PrivateStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

// const PrivateStackScreen = ({navigation}) =>(
//   <PrivateStack.Navigator screenOptions={{
//     headerStyle:{
//       backgroundColor:'#1167b1',
//     },
//     headerTintColor:'#fff',

//   }}>
//   <PrivateStack.Screen name="Private" component={Privatescreen}
//     options={{
//       title:'Private',
//       headerLeft:() =>(
//       <FontAwesome.Button name="bars" size={25}
//       backgroundColor="#1167b1" onPress={()=> navigation.openDrawer()}/>
//     )
    
//     }}
//   />
//   </PrivateStack.Navigator>
// )
const ProfileStackScreen = ({navigation}) =>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#1167b1',
    },
    headerTintColor:'#fff',

  }}>
  <ProfileStack.Screen name="Profile" component={Profilescreen}
    options={{
      title:'Profile',
      headerLeft:() =>(
      <FontAwesome.Button name="bars" size={25}
      backgroundColor="#1167b1" onPress={()=> navigation.openDrawer()}/>
    ),
    //add onpress to go to the edit page
    headerRight:() =>(
      <Feather.Button name="edit-3" size={30}
      backgroundColor="#1167b1" onPress={()=> navigation.openDrawer()}/>
    )
    }}
  />
  </ProfileStack.Navigator>
)

const ScheduleStackScreen = ({navigation}) =>(
  <ScheduleStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#1167b1',
    },
    headerTintColor:'#fff',

  }}>
  <ScheduleStack.Screen name="Schedule" component={ScheduleScreen}
    options={{
      title:'My plans',
      headerLeft:() =>(
      <FontAwesome.Button name="bars" size={25}
      backgroundColor="#1167b1" onPress={()=> navigation.openDrawer()}/>
    ),
    }}
  />
  </ScheduleStack.Navigator>
)
export default class Tabscreen extends Component {
render(){ 
  
  createBottomTabs = () => 
  
    <MaterialBottomTabs.Navigator initialRouteName="Home">

      <MaterialBottomTabs.Screen 
        name="Schedule" 
        component={ScheduleStackScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={27} />
            ),
        }}
        />  
        <MaterialBottomTabs.Screen 
        name="Profile" 
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }} />
        
        <MaterialBottomTabs.Screen 
        name="Ride" 
        component={Privatescreen}
        options={{
          tabBarLabel: 'Private',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
            ),
        }} />
        <MaterialBottomTabs.Screen 
        name="Share" 
        component={Sharescreen}
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="users" color={color} size={22} />
            ),
        }} />
     
        <MaterialBottomTabs.Screen 
        name="Notification" 
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
        }}/>
        
    </MaterialBottomTabs.Navigator>


  // createHomeStack = () =>
  //   <Stack.Navigator>
  //       <Stack.Screen name="Profile" children={createBottomTabs} />
  //       {/* <Stack.Screen name="Notification" component={Notification} />
  //       <Stack.Screen name="Private" component={Privatescreen} />
  //       <Stack.Screen name="Schedule" component={ScheduleScreen} />
  //       <Stack.Screen name="Share" component={Sharescreen} />    */}
  //   </Stack.Navigator>
 

  return(
    // <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}
      drawerContentOptions={{
          activeBackgroundColor:"transparent",
          labelStyle: {
          color: '#fff',
          },      
        }}
        />}
        // drawerStyle={{backgroundColor: '#111f0f',opacity:0.6,labelStyle:{color:"#fff"}}
        // }
        
        >

        <Drawer.Screen name = "Home" children={createBottomTabs}/>
        <Drawer.Screen name = "Profile" component = {Profilescreen}/>
        <Drawer.Screen name = "Schedule" component = {ScheduleStackScreen}/>
        <Drawer.Screen name = "Settings" component = {ScheduleScreen}/>

      </Drawer.Navigator>
    // </NavigationContainer>
    
  );
}

}
