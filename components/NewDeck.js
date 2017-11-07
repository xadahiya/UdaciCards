import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckForm from './NewDeckForm';
class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewDeckForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
    
  },
});

export default NewDeck
