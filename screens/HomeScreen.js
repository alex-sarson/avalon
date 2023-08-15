import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the home screen</Text>
      <Button title="New Game" onPress={() => navigation.navigate('Setup')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
