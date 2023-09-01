import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useStyles } from './CalcButtonStyles';

type TDateInput = {
  title: string;
  buttonColor: string;
  textColor: string;
  isBig?: boolean;
};


const CalcButton = ({ title, buttonColor, textColor, isBig }: TDateInput) => {
  const styles = useStyles(buttonColor, textColor, isBig);

  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
