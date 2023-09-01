import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useStyles } from './CalcButtonStyles';

type TDateInput = {
  title: string;
  buttonColor: string;
  textColor: string;
};


const CalcButton = ({ title, buttonColor, textColor }: TDateInput) => {
  const styles = useStyles(buttonColor, textColor);

  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
