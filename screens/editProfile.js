import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View, Text } from 'react-native';


const editProfile = () => {
  return(
   <View style = {styles.container}>
     <Text style={styles.notify_text}>
     You donot have editProfile.
     </Text>
   </View>

  );
}
export default editProfile;

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
