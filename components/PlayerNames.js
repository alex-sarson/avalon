import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function PlayerNames({ count, setPlayerData }) {
  const [playerNames, setPlayerNames] = useState([]);
  const fields = Array.from({ length: count }, (_, i) => i);
  setPlayerData(playerNames);

  // TODO: make it so that there can't be duplicate names stored in the playerNames array.

  return (
    <View>
      {fields.map((i) => (
        <TextInput
          key={i}
          placeholder={'Player ' + (i + 1)}
          style={styles.text}
          onChangeText={(text) => {
            const values = [...playerNames];
            values[i] = text;
            setPlayerNames(values);
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    padding: 4,
    marginTop: 20,
  },
});
