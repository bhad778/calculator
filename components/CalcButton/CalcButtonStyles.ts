import { StyleSheet } from "react-native";

const buttonSize = 90;

export const useStyles = (buttonColor: string, textColor: string) => {
  const styles = StyleSheet.create({
    button: {
      height: buttonSize,
      width: buttonSize,
      backgroundColor: buttonColor,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 30,
      color: textColor,
    },
  });
  return styles;
};

export default useStyles;
