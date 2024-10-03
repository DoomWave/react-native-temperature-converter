import { Text, TouchableOpacity } from "react-native"
import { s } from "./ButtonConverter.style"
export function ButtonConverter({unit, onPress}){
    return (
    <TouchableOpacity onPress={onPress} style={s.button}>
        <Text style={s.buttonTxt}>Convert to {unit} </Text>
    </TouchableOpacity>
    );
}