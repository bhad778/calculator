import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { useStyles } from "./CalcButtonStyles";

type TDateInput = {
  title: string;
  buttonColor: string;
  textColor: string;
  isSelected: boolean;
  isBig?: boolean;
};

const CalcButton = ({
  title,
  buttonColor,
  textColor,
  isSelected,
  isBig,
}: TDateInput) => {
  const styles = useStyles(buttonColor, textColor, isSelected, isBig);

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
