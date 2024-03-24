import React, { useContext} from "react";
import { Context } from "./context/GameContext";
import NewGameForm from "./components/NewGameForm";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';

const NewGame = ({ navigation }) => {
    const { newGame } = useContext(Context)

    return (
        <NewGameForm
            onSubmit={(title, result, finalScore) => { newGame(title, result, finalScore, () => navigation.navigate('Index')) }}
        />
    )
}

const styles = StyleSheet.create({

})

export default NewGame