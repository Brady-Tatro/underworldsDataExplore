import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import WarBandDropDown from "./WarBandDropdown";

const NewGameForm = ({ onSubmit, initialValues }) => {
  const [playerGlory, setPlayerGlory] = useState(initialValues.playerGlory)
  const [opponentGlory, setOpponentGlory] = useState(initialValues.opponentGlory)
  const [playerWB, setPlayerWB] = useState(null);
  const [opponentWB, setOpponentWB] = useState(null);
    
  return(
    <View style={styles.index}>
      <WarBandDropDown 
        playerWB={playerWB}
        opponentWB={opponentWB}
        playerWBSet={setPlayerWB}
        opponentWBSet={setOpponentWB}
      />
        
      <TextInput 
        keyboardType="numeric"
        onChangeText={(playerGlory) => setPlayerGlory(playerGlory)}
        value={playerGlory}
        style={styles.input}
        defaultValue="0"
        zIndex={-1}
      />
      <TextInput 
        keyboardType="numeric"
        onChangeText={(opponentGlory) => setOpponentGlory(opponentGlory)}
        value={opponentGlory}
        style={styles.input}
        defaultValue="0"
        zIndex={-1}
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
  },
  index: {
    zIndex: -1
  }
})

export default NewGameForm
