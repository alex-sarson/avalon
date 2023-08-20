import {
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  View,
} from 'react-native';
import { Fragment, useState } from 'react';
import Slider from '@react-native-community/slider';
import CheckBox from 'expo-checkbox';

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
  const [playerNames, setPlayerNames] = useState([]);
  const [additionalChars, setAdditionalChars] = useState(false);
  const [nameErrors, setNameErrors] = useState({});

  const handleSliderChange = (value) => {
    setSettings({ ...settings, numberOfPlayers: value });
    setPlayerNames((prev) => {
      return [...prev.slice(0, settings.numberOfPlayers)];
    });
    setNameErrors((prev) => {
      const errors = { ...prev };
      // filter out errors for non-existing fields
      Object.keys(errors)
        .filter((key) => Number(key) >= value)
        .forEach((key) => delete errors[key]);

      return errors;
    });
  };

  const fields = Array.from({ length: settings.numberOfPlayers }, (_, i) => i);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.numberOfPlayers}>
          <Text>Choose how many players are going to play:</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            step={1}
            minimumValue={5}
            maximumValue={10}
            value={settings.numberOfPlayers}
            onValueChange={handleSliderChange}
          />
          <Text>{settings.numberOfPlayers}</Text>
        </View>

        <View style={styles.playerNames}>
          {fields.map((i) => (
            <Fragment key={`field${i}`}>
              <TextInput
                key={i}
                style={styles.text}
                placeholder={'Player ' + (i + 1)}
                onBlur={() => {
                  if (!playerNames[i]) {
                    setNameErrors({ ...nameErrors, [i]: 'Name is required' });
                  }
                }}
                onChangeText={(text) => {
                  const errors = { ...nameErrors };
                  delete errors[i];
                  setNameErrors(errors);

                  const values = [...playerNames];
                  values[i] = text;
                  setPlayerNames(values);
                }}
              />
              {nameErrors[i] && (
                <Text style={styles.error} key={`error ${i}`}>
                  {nameErrors[i]}
                </Text>
              )}
            </Fragment>
          ))}
        </View>

        <View style={styles.additionalChars}>
          <Text>Additional characters</Text>
          <CheckBox
            disabled={false}
            value={additionalChars}
            onValueChange={(value) => setAdditionalChars(value)}
            style={styles.checkBox}
          />
        </View>
      </ScrollView>
      <Button
        title="Start Game"
        onPress={() => {
          console.log(playerNames, additionalChars, settings.numberOfPlayers);
        }}
        disabled={
          playerNames.length < 5 ||
          playerNames.length != settings.numberOfPlayers
          // Object.keys(nameErrors) && Object.keys()
        }
      />
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

  additionalChars: {
    marginTop: 20,
    flexDirection: 'row',
  },

  text: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    padding: 4,
    marginTop: 20,
  },

  error: {
    color: 'red',
  },

  checkBox: {
    marginLeft: 10,
  },
});
