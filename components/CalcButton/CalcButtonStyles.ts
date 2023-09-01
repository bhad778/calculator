import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    button: {
      height: 50,
      width: 50,
      backgroundColor: "red",
    },
  });
  return styles;
};

export default useStyles;
