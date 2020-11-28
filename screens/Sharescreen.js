import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View, Text,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';
import DestinationButton from '../components/DestinationButton'

export default class Sharescreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      region: null,
    }
    this._getLocationAsync();
  }

  _getLocationAsync = async() => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== 'granted')
      console.log('Permission to access location was denied.')
    
      let location = await Location.getCurrentPositionAsync({enabledHighAccuracy:true});
      let region={
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta:0.045,
        longitudeDelta:0.045,
      }
      this.setState({region:region})
  }
  render(){
  return(
    <View style={styles.container}>
    <DestinationButton />
      <MapView style={styles.mapStyle}
      initialRegion={this.state.region}
      showsUserLocation={true}
      showsCompass={true}
      rotateEnabled={false}
       />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
})