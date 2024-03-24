import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import WARBANDS from "../constants/warbands";

const WarBandDropDown = ({ playerWB, opponentWB, playerWBSet, opponentWBSet }) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [opponentOpen, setOpponentOpen] = useState(false);
  const armies = WARBANDS

  const onPlayerOpen = useCallback(() => {
    setOpponentOpen(false);
  }, []);
  const onOpponentOpen = useCallback(() => {
    setPlayerOpen(false);
  }, []);

  return (
    <View style={StyleSheet.parentView}>
      <DropDownPicker
            open={playerOpen}
            setOpen={() => setPlayerOpen(!playerOpen)}
            onOpen={onPlayerOpen}
            items={WARBANDS}
            value={playerWB}
            setValue={(value) => playerWBSet(value)}
            placeholder="Select Your Warband"
            zindex={200}
            />
      <DropDownPicker
          open={opponentOpen}
          setOpen={() => setOpponentOpen(!opponentOpen)}
          onOpen={onOpponentOpen}
          items={WARBANDS}
          value={opponentWB}
          setValue={(value) => opponentWBSet(value)}
          placeholder="Select Opponent's warband"
          zIndex={100}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  parentView: {
    zIndex: 1000
  }

})

export default WarBandDropDown