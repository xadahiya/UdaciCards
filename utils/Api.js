import {AsyncStorage} from 'react-native';
import {KEY} from './Keys';

export function getAllDecks() {
  // AsyncStorage.clear()
  return AsyncStorage.getItem(KEY).then((value) => JSON.parse(value))
}

export function setDecks(decks) {
  return AsyncStorage.setItem(KEY, JSON.stringify(decks))
}
export function addDeck(deck) {
  return AsyncStorage.mergeItem(KEY, JSON.stringify(deck))
}
