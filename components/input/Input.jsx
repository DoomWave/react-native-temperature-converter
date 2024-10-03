import {View, TextInput } from "react-native";
import { style } from "./input.style";
export function Input() {
    return (
    <TextInput style={style.input} placeholder="Type your temperature"/>
);
}