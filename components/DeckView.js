import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';

class DeckView extends React.Component {

  handleStartQuiz = () => {
    const {navigate} = this.props.navigation;
    if (this.props.deck.questions.length > 0) {
      navigate('QuizView', {deck_id: this.props.deck.title})
    } else {
      ToastAndroid.show("Please add some cards to deck first!", ToastAndroid.SHORT)
    }

  }
  render() {
    const {deck} = this.props;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.deckname}>{deck.title}</Text>
        <Text style={styles.deckcards}>{deck.questions.length}
          cards</Text>
        <View>
          <TouchableOpacity style={styles.cardBtn} onPress={() => navigate('AddCardView', {deck_id: deck.title})}>
            <Text style={styles.cardBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quizBtn} onPress={() => this.handleStartQuiz()}>
            <Text style={styles.quizBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center'
  },
  quizBtn: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  },
  quizBtnText: {
    color: 'white',
    fontSize: 20
  },
  cardBtn: {
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 150,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  cardBtnText: {
    fontSize: 20
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

mapStateToProps = (state, props) => {
  return {
    deck: state[props.navigation.state.params.deck_id]
  }
}

export default connect(mapStateToProps)(DeckView)
