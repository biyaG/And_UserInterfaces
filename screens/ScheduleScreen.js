import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { SectionList,FlatList, StyleSheet,View, Text, Button } from 'react-native';
import {store} from '../store.js'
import {ip} from '../helper.js'
import axios from 'axios';
// import Card from '../components/Card'
class ScheduleScreen extends  Component {
  constructor(props){
    super(props);
    this.state = {
     schedules:[]
    }
    // this.viewSchedule()
  }
  componentDidMount() {
    // console.log(com)
    // 
    this.viewSchedule()
  }
  viewSchedule = ()=>{
    id = store.passenger.id
    console.log(store, 'from store fjias',id)
    console.log(`http://${ip}/passenger/viewschedule/${id}`)
    axios.get(`http://${ip}/passenger/viewschedule/${id}`,{
      headers: {
        'Authorization': `Token ${store.token}`
      }
    })
      .then(response=>{
          console.log(response)
          // this.setState({schedules:response.data})
          response.data.forEach(element => {
            this.setState({...schedules,element})
          });
          console.log(this.state.schedules)
      }).catch(error=>console.log(error))
    
  }
  
  render(){return(
   <View style = {styles.container}>
     {/* <Text style={styles.schedule_text}>
     You donot have any Schedule.
     </Text> */}
     
     <FlatList
        data={[
          // {key: `${(this.state.schedules ? this.state.schedules[0].driver : "no driver assigned ")}`},
          // {key: `${this.state.schedules[0]['id'] }`},

          // {key: `${this.state.schedules[1]}`},
          {key: 'driver not assigned'},
          {key: 'Pick up time: 11:00 '},
          {key: 'Day: 19-12-2020'},
          {key: 'Pickup Location: 4 killo'},
          {key: 'Destination Location:  Bole'},
          // {key: 'John'},
          // {key: 'Jillian'},
          // {key: 'Jimmy'},
          // {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
     {/* <SectionList
          sections={this.state.schedules}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{driver}</Text>
          )}
        /> */}


     {/* <SectionList
          sections=  {this.state.schedules }     // {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            // {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
           
          
          
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> */}
   </View>

  );
}}
export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
