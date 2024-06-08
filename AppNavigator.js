import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/login';
import HomeScreen from "./src/homepage";


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login"
                                  component={LoginScreen}
                                  options={{ title: '登录'}} />
                    <Stack.Screen name="Home"
                                  component={HomeScreen}
                                  options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
