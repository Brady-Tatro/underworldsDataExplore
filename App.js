import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/IndexScreen';
import NewGame from './src/CreateGame';
import { Provider } from './src/context/GameContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  NewGame: NewGame
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Underworlds Data Feast'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = createAppContainer(navigator)

export default () => { 
  return (
    <Provider>
      <App />
    </Provider>
  )
}