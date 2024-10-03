import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  Input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 30,
    paddingLeft: 30,
    },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 30,
    fontSize: 30,
  }
});