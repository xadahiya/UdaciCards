import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Deck from './Deck';
import {AsyncStorage} from 'react-native';
import {KEY} from '../utils/Keys';

class Decks extends React.Component {

  componentWillMount() {
      // const value = AsyncStorage.getItem(KEY);
       AsyncStorage.getItem(KEY).then((JSON.value) => console.log(value))
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Decks
