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

class AddCardForm extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  // Used to update the AsyncStorage after local state update
  componentWillReceiveProps(newProps) {
    Api.setDecks(newProps.decks)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>Add Card to Deck</Text>
        <TextInput style={styles.inputField} value={this.state.question} onChangeText={question => this.setState({question})} placeholder="Question"/>
        <TextInput style={styles.inputField} value={this.state.answer} onChangeText={answer => this.setState({answer})} placeholder="Answer"/>

        <TouchableOpacity style={styles.submitBtn} onPress={this._submitForm}>
          <Text style={styles.submitBtnText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _submitForm = () => {
    const questionObj = this.state;
    const {deck_id} = this.props.navigation.state.params;

    if (questionObj.question.length === 0 || questionObj.answer.length === 0) {
      ToastAndroid.show("Please write something and submit.", ToastAndroid.SHORT)

    } else {
      this.props.addCardToDeck(deck_id, questionObj)

      this.setState({question: '', answer: ''})
      ToastAndroid.show("Card added to deck successfully!", ToastAndroid.SHORT)
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

mapStateToProps = (state) => {
  return {decks: state}
}

mapDispatchToProps = (dispatch) => {
  return {
    addCardToDeck: (deck_id, card) => dispatch(Actions.addCard(deck_id, card))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCardForm)
