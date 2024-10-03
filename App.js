import { s } from "./App.style";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import { Text, View, Image, ImageBackground } from "react-native";
export default function App() {
  return (
  <ImageBackground >
  <SafeAreaProvider>
    <SafeAreaView style={s.root}>
      <View style={s.workspace}>
        <Text>Temperature</Text>
        <Text>Input</Text>
        <Text>Button</Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  </ImageBackground>
  )
}

