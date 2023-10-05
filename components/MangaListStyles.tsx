import {StyleSheet, useWindowDimensions} from "react-native";

export function useStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    row: {
      padding: 9,
      flexDirection: 'row',
    },
    description: {
      borderWidth: 3,
      borderColor: "white",
      borderRadius: 20,
      width: useWindowDimensions().width,
      marginRight: 10,
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 20,
    },
    cover: {
      width: useWindowDimensions().width / 2.5,
      height: useWindowDimensions().height / 3.5,
      marginRight: 10
    },
    pageTitle: {
      fontSize: 30,
      justifyContent: "center",
    },
  })
}