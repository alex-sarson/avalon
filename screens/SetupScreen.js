import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

// Setup breakdown: https://www.ultraboardgames.com/avalon/game-rules.php
// Number of players
// min = 5; max = 10
// 5 total = 3 good & 2 evil
// 6 total = 4 good & 2 evil
// 7 total = 4 good & 3 evil
// 8 total = 5 good & 3 evil
// 9 total = 6 good & 3 evil
// 10 total = 6 good & 4 evil
// Player's names
// Merlin check
// Morgana check

export default function SetupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the setup screen</Text>
      <Button title="Start Game" onPress={() => console.log('start game')} />
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
