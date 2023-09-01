import { View, Text } from 'react-native';
import { useState } from 'react';

import CalcButton from './components/CalcButton/CalcButton';
import { ButtonConfig } from './buttonConfig';
import useStyles from './AppStyles';

export default function App() {
  const [value, setValue] = useState(0);

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.buttonsSection}>
        {Object.values(ButtonConfig).map((buttonData, index) => {
          return <CalcButton key={index} title={buttonData.text} buttonColor={buttonData.buttonColor} textColor={buttonData.textColor}></CalcButton>
        })}
      </View>
    </View>
  );
}
