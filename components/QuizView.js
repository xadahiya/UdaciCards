import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class QuizView extends React.Component {

  state = {
    isShowingAnswer: false,
    currentIndex: 0,
    correctScore: 0,
    showingResults: false
  }

  toggleIsShowingAnswer = () => {
    this.setState({
      isShowingAnswer: !this.state.isShowingAnswer
    })
  }

  handleBtnPress = (value) => {
    const {questions} = this.props;
    const {currentIndex, correctScore, showingResults} = this.state;

    if (currentIndex < questions.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1,
        correctScore: value === 'correct'
          ? correctScore + 1
          : correctScore
      })

    } else {
      this.setState({
        correctScore: value === 'correct'
          ? correctScore + 1
          : correctScore,
        showingResults: !showingResults
      })
    }
  }

  resetQuiz = () => {
    this.setState({
      isShowingAnswer: false,
      currentIndex: 0,
      correctScore: 0,
      showingResults: false
    })
  }

  render() {
    // console.log(this.props.questions)
    const {questions} = this.props;
    const {currentIndex, showingResults, correctScore} = this.state;
    const {deck_id} = this.props.navigation.state.params;
    const {navigate} = this.props.navigation;
    // const {navigate} = this.props.navigation;
    return (<View style={styles.container}>

    {!showingResults && (
      <View style={{flex:1}}>

        <Text style={styles.questionNumber}>{currentIndex + 1}/ {questions.length}{this.state.currentScore}</Text>
        <View style={styles.innerContainer}>
          {!this.state.isShowingAnswer && (
            <View >
              <Text style={styles.question}>{questions[currentIndex]["question"]}</Text>
              <TouchableOpacity onPress={() => this.toggleIsShowingAnswer()}>
                <Text style={styles.answer}>Answer</Text>
              </TouchableOpacity>
            </View>
          )}
          {this.state.isShowingAnswer && (
            <View>
              <Text style={styles.question}>{questions[currentIndex]["answer"]}</Text>
              <TouchableOpacity onPress={() => this.toggleIsShowingAnswer()}>
                <Text style={styles.answer}>Question</Text>
              </TouchableOpacity>
            </View>
          )}
          <View>
            <TouchableOpacity style={styles.correctBtn} onPress={() => this.handleBtnPress("correct")}>
              <Text style={styles.BtnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectBtn} onPress={() => this.handleBtnPress("incorrect")}>
              <Text style={styles.BtnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )}
    {

    showingResults && (
      <View style={styles.resultContainer}>
      <Text style={styles.resultHeader}>Results</Text>
        <Text style={styles.resultScore}>You scored : {correctScore}/{questions.length}</Text>
        <View>
          <TouchableOpacity style={styles.resultBtn} onPress={() => this.resetQuiz()}>
            <Text style={styles.BtnText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resultBtn} onPress={() => navigate('DeckView', {deck_id:this.props.navigation.state.params.deck_id})}>
            <Text style={styles.BtnText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  resultHeader: {
    fontSize : 60,
    textAlign:'center',
  },
  resultScore: {
    paddingTop:30,
    fontSize : 40,
    marginBottom : 100,
    textAlign:'center',

  },
  correctBtn: {
    backgroundColor: 'green',
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 100,
    padding: 10,
    borderRadius: 10
  },

  resultBtn: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  },
  BtnText: {
    color: 'white',
    fontSize: 20
  },
  incorrectBtn: {
    alignItems: 'center',
    marginRight: 120,
    marginLeft: 120,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red'
  },

  question: {
    fontSize: 60,
    textAlign:'center',

  },
  answer: {
    fontSize: 20,
    color: 'red',
    textAlign:'center',
    
  },
  questionNumber: {
    fontSize: 25,
    padding: 10
  }

});

mapStateToProps = (state, props) => {
  return {
    questions: state[props.navigation.state.params.deck_id].questions
  }
}

export default connect(mapStateToProps)(QuizView)
