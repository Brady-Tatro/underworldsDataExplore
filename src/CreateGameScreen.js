import React, { useContext} from "react";
import { Context } from "./context/GameContext";
import NewGameForm from "./components/NewGameForm";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';

const NewGame = ({ navigation }) => {
    const { newGame } = useContext(Context)

    return (
        <NewGameForm
            onSubmit={(playerWB, opponentWB, playerGlory, opponentGlory) => { newGame(playerWB, opponentWB, playerGlory, opponentGlory, () => navigation.navigate('Index')) }}
        />
    )
}

const styles = StyleSheet.create({

})

export default NewGame