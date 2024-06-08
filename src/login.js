import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {TextInput, Text, Button, Provider} from "react-native-paper";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <Provider>
            <View style={styles.ContainerStyle}>
                <Image source={require('../assets/main_icon.png')}
                style={styles.IconStyle}/>
                <Text style={styles.TitleStyle}>草莓谷管理APP</Text>
                <TextInput label={"用户名"}
                           style={styles.TextInputStyle}/>
                <TextInput label={"密码"} secureTextEntry={secureTextEntry}
                           right={<TextInput.Icon
                               icon={secureTextEntry ? 'eye' : 'eye-off'}
                               onPress={() => setSecureTextEntry(!secureTextEntry)}/>}
                           style={styles.TextInputStyle}/>
                <Button mode={"contained"}
                        style={styles.ButtonStyle}
                        onPress={() => navigation.replace('Home')}
                >登录</Button>
                <Button mode={"elevated"}
                        style={styles.ButtonStyle}

                >注册</Button>
                <Text style={styles.CopyrightInfoStyle}>Designed by Jameswu in Fukuyama</Text>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    ContainerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconStyle:{
        width: width*0.6,
        height: width*0.6,
    },
    TitleStyle:{
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: height*0.01
    },
    TextInputStyle:{
        width: width*0.8,
        marginTop: height*0.02
    },
    ButtonStyle:{
        width: width*0.8,
        marginTop: height*0.02
    },
    CopyrightInfoStyle:{
        fontSize: 18,
        marginTop: height*0.2,
        marginBottom: height*0.001
    }
})