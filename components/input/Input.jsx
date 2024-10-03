import {View, TextInput, Text } from "react-native";
import { style } from "./input.style";
export function Input() {
    return (
    <View style={s.root}>
    <TextInput style={style.input} placeholder="Type your temperature"/>
    <Text style={s.unit}>°C</Text>
    </View>
    )
}