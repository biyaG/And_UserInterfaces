import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {store} from '../store.js'
import {ip} from '../helper.js'
import Loginscreen from './Loginscreen'


export function DrawerContent(props){
  const navigation = useNavigation();
  const handleLogout = ()=> {
    console.log(store.token)
    // token = store.token
    // store = {}
    console.log(store)
    axios.post(`http://${ip}/rest-auth/logout/`, {
      headers: {
        'Authorization': `Token ${store.token}`
      }
    }).then(response=>{
      console.log(response)
      // store = {}
      navigation.navigate('Loginscreen')
    }).catch(error => console.log(error));
        // this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })
        // console.log(`http://${ip}/rest-auth/logout/`, 'hhhhhh')
        // console.log(store)
        
      
  }

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}
         >
        <View style={styles.drawerContent}>
        <View style ={styles.userInfoSection}>
        <View>
        <Avatar.Image
        source={require("../assets/profile.png")}
        size={80}
        />
        <Title style={styles.title}>Biya Girma</Title>
        </View>
        </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
        <Drawer.Section/>
        <DrawerItem
           icon={({color, size}) => (
                <Feather 
                    name="home" 
                    color={'#a7b5d0'}
                     size={20}
                />
                            )}
            label="Home"
            onPress={() => {}}
        />
        <DrawerItem
           icon={({color, size}) => (
                <Feather 
                    name="user" 
                    color={'#a7b5d0'}
                     size={20}
                />
                            )}
            label="Profile"
            onPress={() =>  navigation.navigate('Profile')}
        />
        <DrawerItem
           icon={({color, size}) => (
                <Feather 
                    name="help-circle" 
                    color={'#a7b5d0'}
                     size={20}
                />
                            )}
            label="Help"
            onPress={() => {}}
        />
         <DrawerItem
           icon={({color, size}) => (
                <Feather 
                    name="settings" 
                    color={'#a7b5d0'}
                     size={20}
                />
                            )}
            label="Settings"
            onPress={() => {}}
        />
        <Drawer.Section title="Preferences"/>
        <TouchableRipple>
        <View style={styles.preference}>
        <Text style={{color:'#000'}}>Dark Theme</Text>
        <Switch/>

        </View>
        </TouchableRipple>
        </Drawer.Section>
        
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
         icon={({color, size}) => (
                <Feather 
                    name="log-out" 
                    color={'#a7b5d0'}
                    size={20}
                />
                            )}
            label="Sign out"
            onPress={handleLogout}
            />
        </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1, 
      backgroundColor:'transparent',
    },
    userInfoSection: {
      paddingTop:3,
      justifyContent:'center',
      alignItems:'center',
      
    },
    title: {
      fontSize:17,
      marginTop: 10,
      alignItems:'center',
      color:'#fff'
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 1,
      
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 16,
  
    },
    signout:{
      color:'#fff'
    }
  });