import React, { useCallback, useState } from "react";

import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const NewGameForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [result, setResult] = useState(initialValues.result)
  const [finalScore, setFinalScore] = useState(initialValues.finalScore)
  const [endGloryPlayer, setEndGloryPlayer] = useState(initialValues.endGloryPlayer)
  const [endGloryOpponent, setEndGloryOpponent] = useState(initialValues.endGloryOpponent)

  const [playerOpen, setPlayerOpen] = useState(false);
  const [opponentOpen, setOpponentOpen] = useState(false);
  const [currentPlayerArmyValue, setPlayerArmy] = useState(null);
  const [currentOpponentArmyValue, setOpponentArmy] = useState(null);
  const armies = [
    {label: 'The Headmans Curse', value: 'theHeadMansCurse'},
    {label: 'The Grymwatch', value: 'theGrymwatch'}
  ]

  const onPlayerOpen = useCallback(() => {
    setOpponentOpen(false);
  }, []);
  const onOpponentOpen = useCallback(() => {
    setPlayerOpen(false);
  }, []);

  function createTitle() {
    var fullTile = `${currentPlayerArmyValue} vs ${currentOpponentArmyValue}`
    console.log('title')
    console.log(fullTile)
    setTitle(fullTile)
  }
  
  function getWinner(){
    var result = endGloryPlayer > endGloryOpponent ? "You Won" : "You Lost"
    setResult(result)
  }
  
  function getFinalScore(){
    var finalScore = `You Scored: ${endGloryPlayer} Opponent Scored: ${endGloryOpponent} `
    setFinalScore(finalScore)
  }
    
  return(
    <View>
      <DropDownPicker
          open={playerOpen}
          setOpen={() => setPlayerOpen(!playerOpen)}
          onOpen={onPlayerOpen}
          items={armies}
          value={currentPlayerArmyValue}
          setValue={(value) => setPlayerArmy(value)}
          containerStyle={{zIndex: playerOpen ? 1000 : 0}}
          />
      <DropDownPicker
          open={opponentOpen}
          setOpen={() => setOpponentOpen(!opponentOpen)}
          onOpen={onOpponentOpen}
          items={armies}
          value={currentOpponentArmyValue}
          setValue={(value) => setOpponentArmy(value)}
          containerStyle={{zIndex: playerOpen ? 1000 : 0}}
      />
        
      <TextInput 
        keyboardType="numeric"
        onChangeText={(endGloryPlayer) => setEndGloryPlayer(endGloryPlayer)}
        value={endGloryPlayer}
        style={styles.input}
        defaultValue="0"
      />
      <TextInput 
        keyboardType="numeric"
        onChangeText={(endGloryOpponent) => setEndGloryOpponent(endGloryOpponent)}
        value={endGloryOpponent}
        style={styles.input}
        defaultValue="0"
      />

      <Button
        title='Submit Game'
        onPress={() => onSubmit(title, result, finalscore)}
      />
    </View>
  )
}

NewGameForm.defaultProps = {
  initialValues: {
    title: '',
    result: '',
    endGloryPlayer: "0",
    endGloryOpponent: "0", 
    finalScore: ''
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
