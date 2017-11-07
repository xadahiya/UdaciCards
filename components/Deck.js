import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.deckname}>Deck 1</Text>
      <Text style={styles.deckcards}>{3} cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  backgroundColor: '#FFFFFF',
  padding: 20,
  borderWidth:2,
  margin:2,
  borderRadius:10,
  borderColor: 'grey'
  },
  deckname: {
    fontSize:60
  },
  deckcards: {
    fontSize:30
  }

});

export default Deck
