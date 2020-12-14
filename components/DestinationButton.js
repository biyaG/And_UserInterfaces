import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
   
}from 'react-native';

import{Ionicons} from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Directions } from 'react-native-gesture-handler';


const WIDTH = Dimensions.get('window').width;
// export const DestinationButton = function(props){
export default class DestinationButton extends React.Component{
    state={
        visibility:false,
        visibilitycal:false,
        DateDisplay:"",
        CalDisplay:"",
        pickup: '',
        destination: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidPickup: true,
        isValidDestination:true,
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
      handleValidPickup=(val)=>{
        if(val.trim().length >= 8){
            setData({
                ...data,
                isValidPickup:true
            });
        }else{
            setData({
                ...data,
                isValidPickup:false
            });
        }
    }
    handleValidDestination=(val)=>{
        if(val.trim().length >= 8){
            setData({
                ...data,
                isValidDestination:true
            });
        }else{
            setData({
                ...data,
                isValidDestination:false
            });
        }
    }
    handlePickupChange = (val) => {
        setData({
            ...data,
            pickup: val
        });
    }
    handleDestinationChange = (val) => {
        setData({
            ...data,
            destination: val
        });
    }
render(){
    return(
        <TouchableOpacity style = {styles.container}>
        {/* <View style={styles.leftCol}> */}
        <View style={styles.whereTo}>
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
            <TextInput 
                    placeholder="Where do you want to go?"
                    //secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput1}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePickupChange(val)}
                    onEndEditing={(e)=>handleValidPickup(e.nativeEvent.text)}
                />

            </View>
    
     
                
                <TextInput 
                    placeholder="Pick up Location"
                    //secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleDestinationChange(val)}
                    onEndEditing={(e)=>handleValidDestination(e.nativeEvent.text)}
                />

             
                
            {/* </View> */}
       
        </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
    container:{
        // zIndex:9,
        //position:'absolute',
        width:270,
        top:160,
        paddingTop:20,
        //paddingLeft:20,
        // flexDirection:'column',
        // width:(WIDTH-80),
        // height:80,
        // top:50,
        left:5,
        borderRadius:2,
        backgroundColor:'white',
        //alignItems:'flex-start',
        shadowColor:'#000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0,
    },
    whereTo:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f5',
        paddingBottom:5,
    },
    textInput:{
      //width:150,
      
      marginBottom:25,
      paddingTop:10,
      alignSelf:'center',
      
    },
   
    Button:{
        backgroundColor:"white",

    }
})