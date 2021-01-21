import React ,{Component}from 'react';
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
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {ip} from '../helper.js'
import Toast from 'react-native-simple-toast';
export default class SignupScreen extends Component {
    state={
        username: '',
        password: '',
        firstname: '',
        lastname:'',
        email:'',
        phonenumber:'',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    }
    handleRegister = ()=>{
        // console.log('register')
        const payload ={
            // user : { 
            username: this.state.username, 
            password: this.state.password,
            password2: this.state.confirm_password,
            first_name:this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phonenumber,
         }  
        // }
         console.log( axios.defaults.headers.common.Authorization)
         axios
          .post(`http://${ip}/passenger/register`, {user:{
            username: this.state.username, 
            password: this.state.password,
            password2: this.state.confirm_password,
            first_name:this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phonenumber,
          }})
          .then(response => {
            // const { key, user } = response.data;
            // We set the returned token as the default authorization header
            console.log(response.data , 'this is response')
            Toast.show('Registrations successful!! You can login now.');
            // Navigate to the home screen
            this.props.navigation.navigate('Loginscreen')
            // navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' });
            
         
           
          })
          .catch(error => console.log(error));
         console.log(this.state)
    }
     textInputChangeUsername = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                //...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                //...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    textInputChangeFirstname = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                //...data,
                firstname: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                //...data,
                firstname: val,
                check_textInputChange: false
            });
        }
    }
    textInputChangeLastname = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                //...data,
                lastname: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                //...data,
                lastname: val,
                check_textInputChange: false
            });
        }
    }
    textInputChangePhonenumber = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                //...data,
                phonenumber: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                //...data,
                phonenumber: val,
                check_textInputChange: false
            });
        }
    }
    textInputChangeEmail = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                //...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                //...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    handlePasswordChange = (val) => {
        this.setState({
            //...data,
            password: val
        });
    }

    handleConfirmPasswordChange = (val) => {
        this.setState({
            //...data,
            confirm_password: val
        });
    }

    updateSecureTextEntry = () => {
        this.setState({
            //...data,
            secureTextEntry: !this.state.secureTextEntry
        });
    }

    updateConfirmSecureTextEntry = () => {
        this.setState({
            //...data,
            confirm_secureTextEntry: !this.state.confirm_secureTextEntry
        });
    }
render(){
    return (
      <View style={styles.container}>

          <StatusBar backgroundColor='#1167B1' barStyle="light-content"/>

        <View style={styles.header}>
            <Text style={styles.text_header}>Register now!
           
            </Text>
            
        </View>

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>

            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />

                <TextInput 
                    placeholder="User Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChangeUsername(val)}
                />
            </View>

            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="First Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChangeFirstname(val)}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />

                <TextInput 
                    placeholder="Last Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChangeLastname(val)}
                />
            </View>

           

            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                    Dimensions/>

                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChangeEmail(val)}
                />
            </View>

            <View style={styles.action}>
                <FontAwesome 
                    name="phone"
                    color="#05375a"
                    size={22}
                />

                <TextInput 
                    placeholder="Your PhoneNumber"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChangePhonenumber(val)}
                />
            </View>

            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={this.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={this.updateSecureTextEntry}
                >
                    {this.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
            <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={this.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => this.handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={this.updateConfirmSecureTextEntry}
                >
                    {this.state.confirm_secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}FF6347
                    />
                    }
                </TouchableOpacity>
                
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>

              <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{
                        //borderColor: '#1167b1',
                        //borderWidth: 1,
                         marginTop: 5
                    }}
                >
                    <Text style={[styles.textSignLogin, {
                        color: '#1167b1'
                    }]}>Login?</Text>
                </TouchableOpacity>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    //onPress={() => {this.props.navigation.navigate('Tabscreen', { screen: 'Home' })}}
                    onPress={this.handleRegister}
                >
                <LinearGradient
                    colors={['#1167b1', '#1167d1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>

                </LinearGradient>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1167B1'
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
        paddingRight:8,
        paddingBottom:2,
        backgroundColor:'#EEEEEE',
        borderRadius: 15
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'Android' ? 0 : -12,
        padding: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 10
    },
    textSignLogin: {
        //fontWeight: 'bold',
        fontSize:15,
        paddingLeft:250,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        //alignSelf:'flex-end',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
        
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    color_textPrivate: {
        color: 'grey'
    }
  });


// const SignupScreen = ({navigation}) => {
//     const handleSignup = ()=> {
//         const payload = { username: data.username, password: data.password ,
//             password2:data.confirm_password, first_name:data.firstname, last_name:data.lastname, email: data.email,
//             phone_number: data.phone_number}        
//         // // if (this.props.create) {
//         // //   payload.first_name = this.state.firstName;
//         // //   payload.last_name = this.state.lastName;
//         // // 
//         console.log({user:payload})
        
//         axios
//           .post(`http://${ip}/passenger/register`, {user: payload})
//           .then(response => {
//             // const { token, user } = response.data;
//             // We set the returned token as the default authorization header
//             // axios.defaults.headers.common.Authorization = `Token ${token}`;
//             console.log(response)
           
//             // Navigate to the home screen
//             // navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' });
           
//           })
//           .catch(error => console.log(error));
//         // console.log(this.props)
          
//       }
//     const [data, setData] = React.useState({
//         // email: '',
//         // firstname:'',
//         username: '',
//         password: '',
//         confirm_password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         confirm_secureTextEntry: true,
//     });

//     const textInputChange = (val) => {
//         if( val.length !== 0 ) {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: false
//             });
//         }
//     }

//     const handlePasswordChange = (val) => {
//         setData({
//             ...data,
//             password: val
//         });
//     }

//     const handleConfirmPasswordChange = (val) => {
//         setData({
//             ...data,
//             confirm_password: val
//         });
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const updateConfirmSecureTextEntry = () => {
//         setData({
//             ...data,
//             confirm_secureTextEntry: !data.confirm_secureTextEntry
//         });
//     }

//     return (
//       <View style={styles.container}>

//           <StatusBar backgroundColor='#1167B1' barStyle="light-content"/>

//         <View style={styles.header}>
//             <Text style={styles.text_header}>Register now!
           
//             </Text>
            
//         </View>

//         <Animatable.View 
//             animation="fadeInUpBig"
//             style={styles.footer}
//         >
//             <ScrollView>

//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />

//                 <TextInput 
//                     placeholder="User Name"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//             </View>

//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />

//                 <TextInput 
//                     placeholder="First Name"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//             </View>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />

//                 <TextInput 
//                     placeholder="Last Name"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//             </View>

           

//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="envelope-o"
//                     color="#05375a"
//                     size={20}
//                     Dimensions/>

//                 <TextInput 
//                     placeholder="Your Email"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//             </View>

//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="phone"
//                     color="#05375a"
//                     size={22}
//                 />

//                 <TextInput 
//                     placeholder="Your PhoneNumber"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//             </View>

//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handlePasswordChange(val)}
//                 />
//                 <TouchableOpacity
//                     onPress={updateSecureTextEntry}
//                 >
//                     {data.secureTextEntry ? 
//                     <Feather 
//                         name="eye-off"
//                         color="grey"
//                         size={20}
//                     />
//                     :
//                     <Feather 
//                         name="eye"
//                         color="grey"
//                         size={20}
//                     />
//                     }
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.action}>
//             <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//             <TextInput 
//                     placeholder="Confirm Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handlePasswordChange(val)}
//                 />
//             </View>

//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                 </Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
//                 <Text style={styles.color_textPrivate}>{" "}and</Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
//             </View>
//             <View style={styles.button}>
//                 <TouchableOpacity
//                     style={styles.signIn}
//                     // onPress={() => {navigation.navigate('Tabscreen', { screen: 'Home' })}}
//                     // onPress = {handleSignup}
//                     onPress={handleSignup}
//                 >
//                 <LinearGradient
//                     colors={['#1167b1', '#1167d1']}
//                     style={styles.signIn}
//                 >
//                     <Text style={[styles.textSign, {
//                         color:'#fff'
//                     }]}>Sign Up</Text>

//                 </LinearGradient>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     onPress={() => navigation.goBack()}
//                     style={[styles.signIn, {
//                         borderColor: '#1167b1',
//                         borderWidth: 1,
//                         marginTop: 5
//                     }]}
//                 >
//                     <Text style={[styles.textSign, {
//                         color: '#1167b1'
//                     }]}>Sign In</Text>
//                 </TouchableOpacity>
//             </View>
//             </ScrollView>
//         </Animatable.View>
//       </View>
//     );
// };

// export default SignupScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#1167B1'
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
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: 200,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
        
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 15
//     },
//     color_textPrivate: {
//         color: 'grey'
//     }
//   });