import React, {Component} from 'react';
import Profilescreen from './Profilescreen';
import Notification from './Notification';
import Sharescreen from './Sharescreen';
import Privatescreen from './Privatescreen';
import ScheduleScreen from './ScheduleScreen';
import Rootstackscreen from './Rootstackscreen';


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();



export default class Tabscreen extends Component {
render(){ 
  
  createBottomTabs = () => 
    <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Profile" component={Profilescreen} />
        <MaterialBottomTabs.Screen name="Notification" component={Notification} />
        <MaterialBottomTabs.Screen name="Private" component={Privatescreen} />
        <MaterialBottomTabs.Screen name="Schedule" component={ScheduleScreen} />
        <MaterialBottomTabs.Screen name="Share" component={Sharescreen} />


      </MaterialBottomTabs.Navigator>


  createHomeStack = () =>
    <Stack.Navigator>
        <Stack.Screen name="Profile" children={createBottomTabs} />
        {/* <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Private" component={Privatescreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Share" component={Sharescreen} />    */}
    </Stack.Navigator>
 

  return(
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name = "Home" children={createHomeStack}/>
        <Drawer.Screen name = "Profile" component = {Profilescreen}/>
        <Drawer.Screen name = "Schedule" component = {ScheduleScreen}/>
        <Drawer.Screen name = "Settings" component = {ScheduleScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

}
