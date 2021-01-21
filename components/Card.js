import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { SectionList,FlatList, StyleSheet,View, Text, Button } from 'react-native';
import {store} from '../store.js'
import {ip} from '../helper.js'
import axios from 'axios';
// import Card from '../components/Card'
class Schedules extends  Component {
  constructor(props){
    super(props);
    this.state = {
     schedules:''
    }
    // this.viewSchedule()
  }
  
  render(){return(
   <View style = {styles.container}>
     <Text style={styles.schedule_text}>
     this
     </Text>
     
     
   </View>

  );
}}
export default ScheduleScreen;

