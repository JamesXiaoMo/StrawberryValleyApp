import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {TextInput, Text, Button, Provider, Portal, Dialog} from "react-native-paper";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [PasswordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);
    const [dialog_name_err_visible, set_dialog_name_err_visible] = useState(false);

    return (
        <Provider>
            <Portal>
                <Dialog visible={dialog_name_err_visible}>
                    <Dialog.Title>
                        <Text>输入错误</Text>
                    </Dialog.Title>
                    <Dialog.Content>
                        <Text>未输入用户名或密码</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => set_dialog_name_err_visible(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <View style={styles.ContainerStyle}>
                <Image source={require('../assets/main_icon.png')}
                style={styles.IconStyle}/>
                <Text style={styles.TitleStyle}>草莓谷管理APP</Text>
                <TextInput label={"用户名"}
                           style={styles.TextInputStyle}
                           value={username}
                           onChangeText={setUsername}/>
                <TextInput label={"密码"} secureTextEntry={PasswordSecureTextEntry}
                           right={<TextInput.Icon
                               icon={PasswordSecureTextEntry ? 'eye-off' : 'eye'}
                               onPress={() => setPasswordSecureTextEntry(!PasswordSecureTextEntry)}/>}
                           style={styles.TextInputStyle}
                           value={password}
                           onChangeText={setPassword}/>
                <Button mode={"contained"}
                        style={styles.ButtonStyle}
                        onPress={() => {
                                    if (username.trim() === '' || password.trim() === '') {
                                        set_dialog_name_err_visible(true)}
                                    else{
                                        navigation.replace('Home');
                                        }
                                    }
                                }
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
        marginBottom: height*0.02
    },
    ButtonStyle:{
        width: width*0.8,
        marginTop: height*0.02
    },
    CopyrightInfoStyle:{
        fontSize: 18,
        marginTop: height*0.15,
    }
})