import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View, Text,Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';
import  DestinationButton from '../components/DestinationButton'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
// const GOOGLE_PLACES_API_KEY = 'AIzaSyDdSD2sYkjAPdX8IYSgx1EvjhkVNgG_hYM';

export default class Privatescreen extends React.Component{
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
//export default Privatescreen;

const styles = StyleSheet.create({
  // container1: {
  //   flex: 1,
  //   padding: 10,
  //   paddingTop: Constants.statusBarHeight + 10,
  //   backgroundColor: '#ecf0f1',
  // },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
})