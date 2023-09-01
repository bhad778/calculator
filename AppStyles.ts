import { useCallback } from "react";
import { StyleSheet } from "react-native";

export const useStyles = (valueLength: number) => {
  const getValueFontSize = useCallback(() => {
    switch (valueLength) {
      case 8:
        return 75;
      case 9:
        return 70;
      case 10:
        return 65;
      case 11:
        return 60;
      default:
        return 80;
    }
  }, [valueLength]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    valueSection: {
      height: "37%",
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      paddingRight: 23,
    },
    value: {
      fontSize: getValueFontSize(),
      color: "white",
      marginBottom: -18,
    },
    buttonsSection: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "row",
      columnGap: 14,
      rowGap: 14,
      paddingTop: 25,
    },
  });
  return styles;
};

export default useStyles;
