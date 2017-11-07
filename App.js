import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import AddCardForm from './components/AddCardForm';
import QuizView from './components/QuizView';
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

const Stack = StackNavigator({
  Home: {
    screen: Navigator,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title:"Udacicards",
    }
  },
  AddCardView: {
    screen: AddCardForm,
    navigationOptions: {
      tittle: "Add question"
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: "Quiz"
    }
  }
});

const store = createStore(reducer);
export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
      <View style={styles.container}>
       <StatusBar barStyle = "light-content" hidden = {false}/>
      <Stack/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
