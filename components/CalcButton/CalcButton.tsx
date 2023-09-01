import React, { useCallback, memo } from "react";
import { TouchableOpacity, Text } from "react-native";

import { useStyles } from "./CalcButtonStyles";

type TDateInput = {
  title: string;
  buttonColor: string;
  textColor: string;
  isSelected: boolean;
  action: (value: string) => void;
  isBig?: boolean;
};

const CalcButton = ({
  title,
  buttonColor,
  textColor,
  isSelected,
  action,
  isBig,
}: TDateInput) => {
  const styles = useStyles(buttonColor, textColor, isSelected, isBig);

  const onPressButton = useCallback(() => {
    action(title);
  }, [action, title]);

  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CalcButton);
