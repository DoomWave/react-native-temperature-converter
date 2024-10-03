import {View, TextInput, Text } from "react-native";
import { s } from "./Input.style";
export function Input({defaultValue}) {
    return (
    <View style={s.root}>
    <TextInput 
    style={s.Input} 
    maxLength={3} 
    placeholder="Type your temperature"
    defaultValue={defaultValue}
    />
    <Text style={s.unit}>°C</Text>
    </View>
    );
}