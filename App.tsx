import { View, Text } from "react-native";
import { useState } from "react";

import CalcButton from "./components/CalcButton/CalcButton";
import useApp from "./useApp";
import useStyles from "./AppStyles";

export default function App() {
  const styles = useStyles();
  const { value, selectedButton, ButtonConfig } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.buttonsSection}>
        {Object.entries(ButtonConfig).map(([key, value], index) => {
          return (
            <CalcButton
              key={index}
              title={value.text}
              buttonColor={value.buttonColor}
              textColor={value.textColor}
              isBig={value.isBig}
              isSelected={key === selectedButton}
              action={value.action}
            />
          );
        })}
      </View>
    </View>
  );
}
