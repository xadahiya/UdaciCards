import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Deck extends React.Component {
  render() {
    const {deck, navigate} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('DeckView', {deck_id: deck.title})}>
          <Text style={styles.deckname}>{deck.title}</Text>
          <Text style={styles.deckcards}>{deck.questions.length}
            cards</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderWidth: 2,
    margin: 2,
    borderRadius: 10,
    borderColor: 'grey'
  },
  deckname: {
    fontSize: 60,
    textAlign: 'center'

  },
  deckcards: {
    fontSize: 30,
    textAlign: 'center'
  }

});

export default Deck
