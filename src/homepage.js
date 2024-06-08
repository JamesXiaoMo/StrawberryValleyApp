import React from "react";
import {View, StyleSheet} from "react-native";
import {Button, Provider, Text} from "react-native-paper"

export default function HomeScreen( {navigation} ) {
    return (
        <Provider>
            <View
            style={styles.ContainerStyle}>
                <Text>HomeScreen</Text>
                <Button
                onPress={() => {navigation.replace('Login')}}>返回（测试）</Button>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    ContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})