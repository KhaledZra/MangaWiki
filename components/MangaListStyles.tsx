import {StyleSheet, useWindowDimensions} from "react-native";

export function useStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    row: {
      padding: 7,
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,

      flexDirection: 'row',
    },
    description: {},
    text: {
      flex: 1,
      flexWrap: 'wrap',
      width: useWindowDimensions().width,
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