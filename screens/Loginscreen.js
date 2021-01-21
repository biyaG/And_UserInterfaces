import React,{Component} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    // AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from './Signupscreen'
// import AsyncStorage from '@react-native-community/async-storage';
import {ip} from '../helper.js'
import {store} from '../store.js'
import Toast from 'react-native-simple-toast';

export default class Loginscreen extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUserName: true,
        isValidPassword: true,

    };

    textInputChange = (val) => {
        //let arr=['@','com']
        if (val.trim().length >= 4) {
            this.setState({
                //...data,
                username: val,
                check_textInputChange: true,
                isValidUserName: true
            });
        } else {
            this.setState({
                //...data,
                username: val,
                check_textInputChange: false,
                isValidUserName: false
            });
        }
    }
    handleValidUserName = (val) => {
        let arr = ['@', 'com']
        if (val.trim().length >= 4) {
            this.setState({
                //...data,
                isValidUserName: true
            });
        } else {
            this.setState({
                //...data,
                isValidUserName: false
            })
        }
    }
    handleValidPassword = (val) => {
        if (val.trim().length >= 8) {
            this.setState({
                //...data,
                isValidPassword: true
            });
        } else {
            this.setState({
                //...data,
                isValidPassword: false
            });
        }
    }
    handlePasswordChange = (val) => {
        this.setState({
            //...data,
            password: val
        });
    }

    updateSecureTextEntry = () => {
        this.setState({
            //...data,
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    handleLogin=()=>{
        // console.log("login menesheebsejkdw")
        // this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })
        console.log(`http://${ip}/rest-auth/login/`)
        const payload = { username: this.state.username, password: this.state.password }  

        // if (this.props.create) {
        //   payload.first_name = this.state.firstName;
        //   payload.last_name = this.state.lastName;
        // }
        
        axios
          .post(`http://${ip}/rest-auth/login/`, payload)
          .then(response => {
            const { key, user } = response.data;
            // We set the returned token as the default authorization header
            console.log(response.data , 'this is response')
            store.token = response.data.key
            store.user = user
            // axios.defaults.headers.common.Authorization = `Token ${key}`;
            console.log(store)
            // console.log(response)
            // writeItemToStorage(token)
            // console.log(getData())
            // Navigate to the home screen
            // navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' });
            console.log(store.user.id)
            axios.get(`http://${ip}/passenger/getpassengerbyuserid/${store.user.id}`, {
                // headers: {
                //     'Authorization': `token ${store.token}`
                //   }
            })
            .then(response => {
                const { key, user } = response.data;
                // We set the returned token as the default authorization header
                console.log(response.data , 'this is response')
                
                if (response.data.length == 0){
                    // this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })
                    Toast.show('User is not passanger try again with');
                    console.log('not an admin')
                }else{
                    store.passenger=response.data[0]
                    this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })
                }

                // store.token = response.data.key
                // store.user = user
                // axios.defaults.headers.common.Authorization = `Token ${key}`;
                // console.log(store)
            // Navigate to the home screen
            // this.setState({
            //     username: '',
            //     password: '',
            //     check_textInputChange: false,
            //     secureTextEntry: true,
            //     isValidUserName: true,
            //     isValidPassword: true,
        
            // });
            this.setState({username:'',password:''})
           
            // navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' });
           
          })
          .catch(error => console.log(error));
           
          })
          .catch(error => console.log(error));
        // console.log(payload)
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor='#1167B1' barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome back
            <Feather
                            name="smile"
                            color="#fff"
                            size={30}
                            style={{ marginLeft: 150 }}
                        />
                    </Text>

                </View>

                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView>
                        <View style={styles.action}>
                            <FontAwesome
                                name="envelope-o"
                                color="#05375a"
                                size={20}
                            />

                            <TextInput
                                placeholder="Your Username"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => this.textInputChange(val)}
                                onEndEditing={(e) => this.handleValidUserName(e.nativeEvent.text)}
                            />
                            {this.state.check_textInputChange ?

                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                                </View>
                        {this.state.isValidUserName ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Your Username shall be 4 or more characters</Text>
                            </Animatable.View>
                        }

                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={this.state.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => this.handlePasswordChange(val)}
                                onEndEditing={(e) => this.handleValidPassword(e.nativeEvent.text)}
                            />

                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry}
                            >
                                {this.state.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20} FF6347
                                    />
                                }
                            </TouchableOpacity>

                        </View>
                        {this.state.isValidPassword ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Your password must be 8 characters</Text>
                            </Animatable.View>
                        }
                        <View style={styles.button}>

                        <TouchableOpacity
                            onPress={this.handleLogin}
                                //onPress={() => { this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' }) }}
                                style={[styles.signIn, {
                                    borderColor: '#1167b1',
                                    backgroundColor:'#1167b1',
                                    borderWidth: 1,
                                    marginTop: 5
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#ffffff'
                                }]}>Sign In</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('Signupscreen')}
                //    this.props.navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })


                    style={{
                        //borderColor: '#1167b1',
                        //borderWidth: 1,
                         marginTop: 15
                    }}
                >
                    <Text style={[styles.textSignSignup, {
                        color: '#1167b1'
                    }]}>Signup?</Text>
                </TouchableOpacity>
                          
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>

        );
    };
}

//export default Loginscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1167B1'
    },
    errorMsg: {
        color: "red"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 25,
        paddingBottom: 65
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingTop: 13,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 2,
        backgroundColor: '#EEEEEE',
        borderRadius: 15
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'Android' ? 0 : -12,
        padding: 10,
        color: '#05375a',
        fontFamily: 'Roboto'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textSignSignup: {
        fontSize: 15,
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        paddingLeft:250,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});



// const Loginscreen = ({navigation}) => {
    // const readItemFromStorage = async () => {
    //     const item = await getData();
    //     console.log(item);
    //   };
    //   const writeItemToStorage = async newValue => {
    //     await setItem(newValue);
    //     console.log(newValue);
    //   };
    // console.log(AsyncStorage)
    // const storeData = async (value) => {
    //     try {
    //       await AsyncStorage.setItem('test', value)
    //       console.log('this is being run' , value)
    //     } catch (e) {
    //       // saving error
    //       alert(err)
    //     }
    //   }

    //   const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('test')
    //       if(value !== null) {
    //         // value previously stored
    //         console.log(value)
    //       }
    //     } catch(e) {
    //       // error reading value
    //       alert(err)
    //     }
    //   }

    // const [data, setData] = React.useState({
    //     username: '',
    //     password: '',
    //     check_textInputChange: false,
    //     secureTextEntry: true,
    //     isValidUserName: true,
    //     isValidPassword:true,

    // });

    // const textInputChange = (val) => {
    //     //let arr=['@','com']
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: true,
    //             isValidUserName:true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: false,
    //             isValidUserName:false
    //         });
    //     }
    // }
    // const handleValidUserName=(val)=>{
    //     let arr=['@','com']
    //     if(val.trim().length >= 4){
    //         setData({
    //             ...data,
    //             isValidUserName:true
    //         });
    //     }else{
    //         setData({
    //             ...data,
    //             isValidUserName:false
    //         })
    //     }
    // }
    // const handleValidPassword=(val)=>{
    //     if(val.trim().length >= 8){
    //         setData({
    //             ...data,
    //             isValidPassword:true
    //         });
    //     }else{
    //         setData({
    //             ...data,
    //             isValidPassword:false
    //         });
    //     }
    // }
    // const handlePasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         password: val
    //     });
    // }

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }
    // const handleLogin = ()=> {
    //     console.log(`http://${ip}/rest-auth/login/`)
    //     const payload = { username: data.username, password: data.password }        
    //     // // if (this.props.create) {
    //     // //   payload.first_name = this.state.firstName;
    //     // //   payload.last_name = this.state.lastName;
    //     // // }
        
    //     axios
    //       .post(`http://${ip}/rest-auth/login/`, payload)
    //       .then(response => {
    //         const { token, user } = response.data;
    //         // We set the returned token as the default authorization header
    //         axios.defaults.headers.common.Authorization = `Token ${token}`;
    //         // console.log(response)
    //         // writeItemToStorage(token)
    //         // console.log(getData())
    //         // Navigate to the home screen
    //         navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' });
           
    //       })
    //       .catch(error => console.log(error));
    //     // console.log(this.props)
          
    //   }
    // return (
    //   <View style={styles.container}>

    //       <StatusBar backgroundColor='#1167B1' barStyle="light-content"/>

    //     <View style={styles.header}>
    //         <Text style={styles.text_header}>Welcome back 
    //         <Feather
    //                 name="smile"
    //                 color="#fff"
    //                 size={30}
    //                 style = {{marginLeft: 150}}
    //             />
    //         </Text>
            
    //     </View>

    //     <Animatable.View 
    //         animation="fadeInUpBig"
    //         style={styles.footer}
    //     >
    //         <ScrollView>
    //         <View style={styles.action}>
    //             <FontAwesome 
    //                 name="envelope-o"
    //                 color="#05375a"
    //                 size={20}
    //             />

    //             <TextInput 
    //                 placeholder="Your Username"
    //                 style={styles.textInput}
    //                 autoCapitalize="none"
    //                 onChangeText={(val) => textInputChange(val)}
    //                 onEndEditing={(e)=>handleValidUserName(e.nativeEvent.text)}
    //             />
    //             {data.check_textInputChange ?

    //             <Animatable.View
    //             animation="bounceIn"
    //             >
    //                 <Feather
    //                 name="check-circle"
    //                 color="green"
    //                 size={20}
    //                 />
    //             </Animatable.View>
    //             :null}
                
    //         </View>
    //         {data.isValidUserName ? null :
    //             <Animatable.View animation="fadeInLeft" duration={500}>
    //             <Text style={styles.errorMsg}>Your Username shall be 4 or more characters</Text>
    //             </Animatable.View>
    //         }

    //         <View style={styles.action}>
    //             <Feather 
    //                 name="lock"
    //                 color="#05375a"
    //                 size={20}
    //             />
    //             <TextInput 
    //                 placeholder="Your Password"
    //                 secureTextEntry={data.secureTextEntry ? true : false}
    //                 style={styles.textInput}
    //                 autoCapitalize="none"
    //                 onChangeText={(val) => handlePasswordChange(val)}
    //                 onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
    //             />

    //             <TouchableOpacity
    //                 onPress={updateSecureTextEntry}
    //             >
    //                 {data.secureTextEntry ? 
    //                 <Feather 
    //                     name="eye-off"
    //                     color="grey"
    //                     size={20}
    //                 />
    //                 :
    //                 <Feather 
    //                     name="eye"
    //                     color="grey"
    //                     size={20}FF6347
    //                 />
    //                 }
    //             </TouchableOpacity>
                
    //         </View>
    //         { data.isValidPassword ? null :
    //         <Animatable.View animation="fadeInLeft" duration={500}>
    //             <Text style={styles.errorMsg}>Your password must be 8 characters</Text>
    //             </Animatable.View>
    //         }
    //         <View style={styles.button}>

    //             <TouchableOpacity
    //                 style={styles.signIn}
    //                 onPress={() => navigation.navigate( 'Signupscreen')}
    //             >
    //             <LinearGradient
    //                 colors={['#1167b1', '#1167d1']}
    //                 style={styles.signIn}
    //             >
    //                 <Text style={[styles.textSign, {
    //                     color:'#fff'
    //                 }]}>Sign Up</Text>

    //             </LinearGradient>
    //             </TouchableOpacity>

    //             <TouchableOpacity
    //                 onPress={handleLogin}
    //                 // onPress={() => {navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })}}
    //                 style={[styles.signIn, {
    //                     borderColor: '#1167b1',
    //                     borderWidth: 1,
    //                     marginTop: 5
    //                 }]}
    //             >
    //                 <Text style={[styles.textSign, {
    //                     color: '#1167b1'
    //                 }]}>Sign In</Text>
    //             </TouchableOpacity>
    //         </View>
    //         </ScrollView>
    //     </Animatable.View>
    //   </View>
    // );
// };

// export default Loginscreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#1167B1'
//     },
//     errorMsg:{
//         color:"red"
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 25,
//         paddingBottom: 65
//     },
//     footer: {
//         flex: Platform.OS === 'ios' ? 3 : 5,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 30
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30,

//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingTop: 13,
//         paddingLeft: 8,
//         paddingRight:8,
//         paddingBottom:2,
//         backgroundColor:'#EEEEEE',
//         borderRadius: 15
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'Android' ? 0 : -12,
//         padding: 10,
//         color: '#05375a',
//         fontFamily:'Roboto'
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
        
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 20
//     },
//     color_textPrivate: {
//         color: 'grey'
//     }
//   });