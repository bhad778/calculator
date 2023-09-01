import { StyleSheet } from "react-native";

const primary = "#000000";
const secondary = "#fea00a";
const light = "#a5a5a5";
const dark = "#333333";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: primary,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
    },
    valueSection: {
      height: "35%",
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    value: {
      fontSize: 80,
      color: "white",
    },
    buttonsSection: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return styles;
};

export default useStyles;
