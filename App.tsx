import { View, Text } from 'react-native';

import CalcButton from './components/CalcButton/CalcButton';
import useStyles from './AppStyles';

export default function App() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text style={styles.value}>0</Text>
      </View>
      <View style={styles.buttonsSection}>

      </View>
    </View>
  );
}
