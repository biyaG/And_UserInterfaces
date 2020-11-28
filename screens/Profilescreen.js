import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,
  SafeAreaView,
   Image,View,
    Text,Button,
     SectionList 
  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';



const Profilescreen = () => {
  
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:5}}>
            <View style={styles.profileImage}>
            <Image source={require("../assets/propic.jpg")} style={styles.image} resizeMode="center"></Image>
            </View>
            {/* <View style={styles.add}>
            <Feather.Button
                    name="edit-2"
                    color="#fff"
                    backgroundColor='#41444B'
                    size={20}
                />             
            </View> */}
            </View>
            <View style={{alignSelf:"center", marginTop:10}}>
            <Text style={styles.fullName}>Biya Girma</Text>
            </View>
            <View style={styles.profileList}>  
                <SectionList  
                    sections={[   
                        {title: 'EMAIL', data: ['biyagirma@gmail.com']},  
                        {title: 'MOBILE NO.', data: ['+251911856475',]},  
                        {title: 'PASSWORD', data: ['Password',]}, 
                        {title: 'DATE JOINED', data: ['JUNE-8-2020',]}, 
                    ]}  
                    renderItem={({item}) => <Text style = {styles.item}>{item}</Text>}  
                    renderSectionHeader={({section}) => <Text style = {styles.sectionHeader}>{section.title}</Text>}  
                    keyExtractor={(item, index) => index}  
                />  
            </View>  
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>

  );
}
export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    justifyContent:'center'
  },
  profileImage: {
    alignSelf:"center",
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: "hidden",
    //backgroundColor:'#1167b1',
},
fullName:{
  fontSize:23,
  fontFamily:'Roboto',
  color:"#000",
  fontWeight:'bold'
  
},
profileList:{
  marginTop:12,
},

sectionHeader: {  
  paddingTop: 2,  
  paddingLeft: 15,  
  paddingBottom: 2,  
  fontSize: 18,  
  fontWeight: 'normal',  
  color: "#595959",  
  backgroundColor: '#ccd7e9', 

},
item: {  
  padding: 10, 
  paddingLeft:15, 
  fontSize: 18,  
  height: 50,  
  color:"#a6a6a6",
  backgroundColor: '#fff',   
  //borderBottomWidth:0.8,
  borderBottomColor:'#cccccc',

},  
active: {
  backgroundColor: "#34FFB9",
  position: "absolute",
  bottom: 28,
  left: 10,
  padding: 4,
  height: 20,
  width: 20,
  borderRadius: 10
},
add: {
  backgroundColor: "#41444B",
  position: "absolute",
  bottom: 0,
  right: 125,
  width: 50,
  height: 50,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center"
},
image: {
  flex: 1,
  height: undefined,
  width: undefined
},
});
