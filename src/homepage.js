import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Button, Provider, Text} from "react-native-paper"
import { BarChart } from 'react-native-gifted-charts'

export default function HomeScreen( {navigation} ) {
    const barData = [{value: 1, label: '一月'}, {value: 2, label: '二月'}, {value: 3, label: '三月'}, {value: 4, label: '四月'}, {value: 5, label: '五月'}];
    return (
        <Provider>
            <View style={styles.ContainerStyle}>
                <BarChart data={barData}
                          isAnimated={true}/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    ContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})