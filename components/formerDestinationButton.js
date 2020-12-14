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
        {/* <View style={styles.leftCol}> */}
        {/* <Text style={{fontSize:8}}>{'\u25A0'}</Text> */}
        <View style={styles.whereTo}>
            <TextInput 
                    placeholder="Where do you want to go?"
                    //secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                />

            </View>
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
                    placeholder="Pick up Location"
                    //secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                />

             
                
            {/* </View> */}
         

        {/* <View style={styles.centerCol}>
        <Text style={{fontFamily:'Roboto',fontSize:18,color:'#cccccc'}}>
        Pick up from?
        </Text>
        </View>
        </View> */}

        {/* <View style={styles.rightCol}>
        <Ionicons name='md-car' color='#545454' size={25} style={{alignSelf:'center'}}/>
        </View> */}


        {/* <View style={styles.centerCols}>
         <View style={styles.rightCol}>
        <Ionicons name='md-car' color='#545454' size={25}/>
        </View>
        <Text style={{fontFamily:'Roboto',fontSize:18,color:'#cccccc'}}>
        Where to?
        </Text>
        </View> */}
       
        </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        flexDirection:'row',
        width:(WIDTH-80),
        height:150,
        top:50,
        left:45,
        borderRadius:2,
        backgroundColor:'white',
        alignItems:'flex-start',
        shadowColor:'#000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0,
    },
    textInput:{
      width:150,
      height:250,
    },
    whereTo:{
        paddingTop:70,
        alignSelf:"center",
        
    },
    leftCol:{
        flex:1,
        flexDirection:"row",
        paddingTop:0,
        alignItems:'center',
        //justifyContent: 'flex-start',

    },
    centerCol:{
        flex:4,
        paddingTop:10,
    },
    centerCols:{
        flexDirection:"row",
        flex:1,
        paddingTop:10,
        alignItems:'flex-start',



    },
    rightCol:{
        flex:1,
        borderLeftWidth: 100,
        borderColor: '#ededed'
    },
    Button:{
        backgroundColor:"white",

    }
})