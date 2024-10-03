import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Text, View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { 
  UNITS, 
  convertTemperatureTo, 
  getOppositeUnit
} from "./utils/temperature";
import { ButtonConverter } from "./components/ButtonConverter/ButtonConvert";
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnite = getOppositeUnit(currentUnit)

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnite).toFixed(1);
    }
  }
  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature 
            unit={oppositeUnite} 
            temperature={getConvertedTemperature()}
            />
            <Input 
              unit={currentUnit} 
              onChange={setInputValue} 
              defaultValue={0}
            />
            <ButtonConverter unit={currentUnit} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )
}

