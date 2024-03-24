import React, { useCallback, useState } from "react";

import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const NewGameForm = ({ onSubmit, initialValues }) => {
  const [playerGlory, setPlayerGlory] = useState(initialValues.playerGlory)
  const [opponentGlory, setOpponentGlory] = useState(initialValues.opponentGlory)

  const [playerOpen, setPlayerOpen] = useState(false);
  const [opponentOpen, setOpponentOpen] = useState(false);
  const [playerWB, setPlayerWB] = useState(null);
  const [opponentWB, setOpponentWB] = useState(null);
  const armies = [
    {label: 'The Headmans Curse', value: 'The HeadMans Curse'},
    {label: 'The Grymwatch', value: 'The Grymwatch'}
  ]

  const onPlayerOpen = useCallback(() => {
    setOpponentOpen(false);
  }, []);
  const onOpponentOpen = useCallback(() => {
    setPlayerOpen(false);
  }, []);
    
  return(
    <View>
      <DropDownPicker
          open={playerOpen}
          setOpen={() => setPlayerOpen(!playerOpen)}
          onOpen={onPlayerOpen}
          items={armies}
          value={playerWB}
          setValue={(value) => setPlayerWB(value)}
          containerStyle={{zIndex: playerOpen ? 1000 : 0}}
          />
      <DropDownPicker
          open={opponentOpen}
          setOpen={() => setOpponentOpen(!opponentOpen)}
          onOpen={onOpponentOpen}
          items={armies}
          value={opponentWB}
          setValue={(value) => setOpponentWB(value)}
          containerStyle={{zIndex: playerOpen ? 1000 : 0}}
      />
        
      <TextInput 
        keyboardType="numeric"
        onChangeText={(playerGlory) => setPlayerGlory(playerGlory)}
        value={playerGlory}
        style={styles.input}
        defaultValue="0"
      />
      <TextInput 
        keyboardType="numeric"
        onChangeText={(opponentGlory) => setOpponentGlory(opponentGlory)}
        value={opponentGlory}
        style={styles.input}
        defaultValue="0"
      />

      <Button
        title='Submit Game'
        onPress={() => onSubmit(playerWB, opponentWB, playerGlory, opponentGlory)}
      />
    </View>
  )
}

NewGameForm.defaultProps = {
  initialValues: {
    playerGlory: "0",
    opponentGlory: "0"
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  }
})

export default NewGameForm
