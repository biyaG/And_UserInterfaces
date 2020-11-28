import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Loginscreen from './Loginscreen';
import Signupscreen from './Signupscreen';
import  Tabscreen  from './Tabscreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LoginScreen" component={Loginscreen}/>
        <RootStack.Screen name="Signupscreen" component={Signupscreen}/>
        <RootStack.Screen name="Tabscreen" component={Tabscreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;