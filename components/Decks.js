import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import Deck from './Deck';
import * as Api from '../utils/Api';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class Decks extends React.Component {

  state = {}

  componentWillMount() {
    const {getAllDecks} = this.props;
    getAllDecks()
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ...newProps.decks
    })
  }

  render() {
    const decks = this.state;
    return (
      <FlatList data={[...Object.keys(decks)]} renderItem={(deck) => (<Deck key={deck} deck={decks[deck["item"]]} navigate={this.props.navigation.navigate}/>)} keyExtractor={(deck, index) => index}></FlatList>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'

  }
});

mapStateToProps = (state) => {
  return {decks: state}
}

mapDispatchToProps = (dispatch) => {
  return {
    getAllDecks: () => Api.getAllDecks().then(data => dispatch(Actions.receiveDecks(data))).catch(err => console.log(err))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
