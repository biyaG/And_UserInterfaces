import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
   
}from 'react-native';

import{Ionicons} from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const WIDTH = Dimensions.get('window').width;
// export const DestinationButton = function(props){
export default class DestinationButton extends React.Component{
    state={
        visibility:false,
        visibilitycal:false,
        DateDisplay:"",
        CalDisplay:""
      }
      handleConfirm=(date)=>{
        this.setState({visibility:false,
          DateDisplay:date.toUTCString()})
      }
      onPressCancel=()=>{
        this.setState({visibility:false})
      }
      onPressButton=()=>{
        this.setState({visibility:true})
      }
      
render(){
    return(
        <TouchableOpacity onPress = {() =>{}} style = {styles.container}>
        <View style={styles.leftCol}>
        {/* <Text style={{fontSize:8}}>{'\u25A0'}</Text> */}
        <Feather.Button 
                    name="calendar"
                    color="#545454"
                    size={25}
                    backgroundColor="white"
                    onPress={this.onPressButton}
                />
                <DateTimePickerModal
      isVisible={this.state.visibility}
      onConfirm={this.handleConfirm}
      onCancel={this.onPressCancel}
      mode="datetime"
      />
        </View>
        <View style={styles.centerCol}>
        <Text style={{fontFamily:'Roboto',fontSize:18,color:'#cccccc'}}>
        Where to?
        </Text>
        </View>
        <View style={styles.rightCol}>
        <Ionicons name='md-car' color='#545454' size={25} style={{alignSelf:'center'}}/>
        </View>
        </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        flexDirection:'row',
        width:(WIDTH-40),
        height:50,
        top:60,
        left:20,
        borderRadius:2,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor:'#000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0,
    },
    leftCol:{
        flex:1,
        alignItems:'center'
    },
    centerCol:{
        flex:4
    },
    rightCol:{
        flex:1,
        borderLeftWidth: 1,
        borderColor: '#ededed'
    },
    Button:{
        backgroundColor:"white"
    }
})