import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  View,
} from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import PlayerNames from '../components/PlayerNames';

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
  const [settings, setSettings] = useState({
    numberOfPlayers: 5,
  });

  const [playerData, setPlayerData] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.numberOfPlayers}>
          <Text>Choose how many players are in this game</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            step={1}
            minimumValue={5}
            maximumValue={10}
            value={settings.numberOfPlayers}
            onValueChange={(value) =>
              setSettings({ ...settings, numberOfPlayers: value })
            }
          />
          <Text>{settings.numberOfPlayers}</Text>
        </View>
        <PlayerNames
          count={settings.numberOfPlayers}
          playerData={playerData}
          setPlayerData={setPlayerData}
        />
      </ScrollView>
      <Button title="Start Game" onPress={() => console.log(playerData)} />
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

  numberOfPlayers: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
