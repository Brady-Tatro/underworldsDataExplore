import React, { useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from "./context/GameContext";
import { Feather, AntDesign } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, NewGame} = useContext(Context)

    return (
        <View>
            <Button title="New Game" 
                onPress={() => navigation.navigate('CreateGame')} 
                />

            <FlatList 
                data={state}
                keyExtractor={(gmae) => gmae.id}
                renderItem={({ item }) => {
                    return (
                        <View> 
                            <Text>{item.title} - {item.result} - {item.finalScore}</Text>
                        </View>
                    )
                }}
            /> 

        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateGame')}
            >
                <AntDesign name="pluscircleo" stlye={styles.headerIcon} />
            </TouchableOpacity>
        )
    })
}

const styles = StyleSheet.create({
    headerIcon: {
        fontSize: 24, 
        color: 'Black'
    }
})

export default IndexScreen