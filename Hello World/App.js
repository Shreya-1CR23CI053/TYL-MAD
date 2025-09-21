import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border:20,
    flex: 1,
    backgroundColor: '#7510a4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
