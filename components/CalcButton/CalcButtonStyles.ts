import { StyleSheet } from "react-native";

const buttonSize = 87;

export const useStyles = (
  buttonColor: string,
  textColor: string,
  isBig: boolean
) => {
  const styles = StyleSheet.create({
    button: {
      height: buttonSize,
      backgroundColor: buttonColor,
      borderRadius: 100,
      justifyContent: "center",
      width: isBig ? buttonSize * 2 + 14 : buttonSize,
      alignItems: isBig ? "flex-start" : "center",
      paddingLeft: isBig ? 35 : 0,
    },
    text: {
      fontSize: 30,
      color: textColor,
    },
  });
  return styles;
};

export default useStyles;
