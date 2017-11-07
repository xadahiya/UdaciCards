import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {KEY} from '../utils/Keys';
import * as Api from '../utils/Api';
class NewDeckForm extends React.Component {
  state = {
    deckname: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>What is the title of your deck ?</Text>
        <TextInput style={styles.inputField} value={this.state.deckname} placeholder="deck name" onChangeText={deckname => this.setState({deckname})}/>

        <TouchableOpacity style={styles.submitBtn} onPress={this._submitForm}>
          <Text style={styles.submitBtnText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }

  createDeck = (deckname) => {
    let deck = {}
    deck[deckname] = {
      title: deckname,
      questions: []
    }
    return deck
  }

  _submitForm = () => {
    const {deckname} = this.state;
    const deck = this.createDeck(deckname);
    if (deckname.length > 3) {

      Api.addDeck(deck).then(this.props.dispatch(Actions.addDeck(deck))).catch(err => {
        ToastAndroid.show("Adding Deck Failed! Please try again", ToastAndroid.SHORT)
      });
      this.setState({deckname: ''})
      ToastAndroid.show("Deck added successfully!", ToastAndroid.SHORT)

    } else {
      ToastAndroid.show("Deck Title Too Small!", ToastAndroid.SHORT)

    }

  };
}

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 40,
    textAlign: "center"
  },
  container: {
    paddingTop: 100,
    justifyContent: 'center'
  },
  submitBtn: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 30,
    padding: 10,
    borderRadius: 10
  },
  submitBtnText: {
    color: 'white',
    fontSize: 20
  },
  inputField: {
    paddingTop: 20,
    marginRight: 50,
    marginLeft: 50,
    fontSize: 30
  }
});

export default connect()(NewDeckForm)
