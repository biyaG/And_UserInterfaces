import React from 'react';
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

const Loginscreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword:true,

    });

    const textInputChange = (val) => {
        //let arr=['@','com']
        if( val.trim().length > 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidEmail:true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidEmail:false
            });
        }
    }
    const handleValidEmail=(val)=>{
        let arr=['@','com']
        if(val.trim().length >= 6){
            setData({
                ...data,
                isValidEmail:true
            });
        }else{
            setData({
                ...data,
                isValidEmail:false
            })
        }
    }
    const handleValidPassword=(val)=>{
        if(val.trim().length >= 8){
            setData({
                ...data,
                isValidPassword:true
            });
        }else{
            setData({
                ...data,
                isValidPassword:false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
      <View style={styles.container}>

          <StatusBar backgroundColor='#1167B1' barStyle="light-content"/>

        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome back 
            <Feather
                    name="smile"
                    color="#fff"
                    size={30}
                    style = {{marginLeft: 150}}
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
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
                />
                {data.check_textInputChange ?

                <Animatable.View
                animation="bounceIn"
                >
                    <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                    />
                </Animatable.View>
                :null}
                
            </View>
            {data.isValidEmail ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Your Email is invalid</Text>
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
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                />

                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
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
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Your password must be 8 characters</Text>
                </Animatable.View>
            }
            <View style={styles.button}>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate( 'Signupscreen')}
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

                <TouchableOpacity
                    onPress={() => {navigation.navigate('Tabscreen', { screen: 'ScheduleScreen' })}}
                    style={[styles.signIn, {
                        borderColor: '#1167b1',
                        borderWidth: 1,
                        marginTop: 5
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#1167b1'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default Loginscreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1167B1'
    },
    errorMsg:{
        color:"red"
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
        fontFamily:'Roboto'
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
        fontWeight: 'bold'
        
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