import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addDeck} from '../actions';
import { KEY } from '../utils/Keys';

class NewDeckForm extends React.Component {
  state = {
    deckname: '',
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.formTitle}>What is the title of your deck ?</Text>
        <TextInput style={styles.inputField}
          value={this.state.deckname}
          onChangeText={deckname => this.setState({deckname})}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={this._submitForm}>
          <Text style={styles.submitBtnText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }

  createDeck = (deckname) => {
    let deck = {}
    deck[deckname] = {
      questions: []
    }
    return deck
  }

  _submitForm = () => {
    const { deckname} = this.state;
    const deck = this.createDeck(deckname);

    AsyncStorage.mergeItem(KEY, JSON.stringify(deck)).then(
      this.props.dispatch(addDeck(deck))
    ).catch(err => console.log(err))
  };
}

const styles = StyleSheet.create({
  formTitle: {
    fontSize:40,
    textAlign: "center",
  },
  container: {
    paddingTop:100,
    justifyContent:'center'
  },
  submitBtn: {
    backgroundColor:'black',
    alignItems:'center',
    marginRight:120,
    marginLeft:120,
    marginTop:30,
    padding:10,
    borderRadius:10
  },
  submitBtnText: {
    color:'white',
    fontSize:20,
  },
  inputField: {
    paddingTop:20,
    marginRight:50,
    marginLeft:50,
    fontSize:30
  }
});

export default connect()(NewDeckForm)
