import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useStyles } from './CalcButtonStyles';

type TDateInput = {
  title: string;
};


const CalcButton = ({ title }: TDateInput) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.button}>
        
    </TouchableOpacity>
  );
};

export default CalcButton;
