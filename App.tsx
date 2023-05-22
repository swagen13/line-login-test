import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import LineLogin from '@xmartlabs/react-native-line'

export default function App() {

  const login = async () => {
    try {
      const result = await LineLogin.login()
      console.log('result', result)
    } catch (e) {
      console.log('error', e)
    }
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Login" onPress={() => {
        login()
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
