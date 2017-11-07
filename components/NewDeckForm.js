import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import addDeck from '../actions'
class NewDeckForm extends React.Component {
  state = {
    deckname: '',
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.deckname}
          onChangeText={deckname => this.setState({deckname})}
        />

        <TouchableOpacity onPress={this._submitForm}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  createDeck = (deckname) => {
    return {deckname: {
      questions: {}
    }}
  }
  _submitForm = () => {
    const { deckname} = this.state
    this.props.dispatch(addDeck(createDeck(deckname)))
    // do some stuff here…
  };
}

export default connect()(NewDeckForm)
