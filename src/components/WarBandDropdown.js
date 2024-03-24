import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const WarBandDropDown = ({ playerWB, opponentWB, playerWBSet, opponentWBSet }) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [opponentOpen, setOpponentOpen] = useState(false);
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

  return (
    <View>
      <DropDownPicker
            open={playerOpen}
            setOpen={() => setPlayerOpen(!playerOpen)}
            onOpen={onPlayerOpen}
            items={armies}
            value={playerWB}
            setValue={(value) => playerWBSet(value)}
            containerStyle={{zIndex: playerOpen ? 1000 : 0}}
            />
      <DropDownPicker
          open={opponentOpen}
          setOpen={() => setOpponentOpen(!opponentOpen)}
          onOpen={onOpponentOpen}
          items={armies}
          value={opponentWB}
          setValue={(value) => opponentWBSet(value)}
          containerStyle={{zIndex: playerOpen ? 1000 : 0}}
      />
    </View>
  )
}

export default WarBandDropDown