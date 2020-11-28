import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View, Text } from 'react-native';


const ScheduleScreen = () => {
  return(
   <View style = {styles.container}>
     <Text style={styles.schedule_text}>
     You donot have any Schedule.
     </Text>
   </View>

  );
}
export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent:'center',

  },
  schedule_text: {
   fontSize:15,
  color:'#737373'
}
});
