import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

const Navigator = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: "Decks"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "Add New Deck"
    }
  }

}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    allowFontScaling: true,
  style: {
  backgroundColor: 'black',
}
},

 });
const store = createStore(reducer);
export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
      <View style={styles.container}>
      <Navigator/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:24,
  },
});
