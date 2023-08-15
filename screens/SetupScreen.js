import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function SetupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the setup screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
