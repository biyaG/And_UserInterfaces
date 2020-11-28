import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View, Text } from 'react-native';


const Notification = () => {
  return(
   <View style = {styles.container}>
     <Text style={styles.notify_text}>
     You donot have Notification.
     </Text>
   </View>

  );
}
export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems:'center',
    justifyContent:'center',

  },
  notify_text: {
   fontSize:15,
  color:'#737373'
}
});
