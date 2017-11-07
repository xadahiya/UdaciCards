import {ADD_NEW_DECK} from '../utils/ActionConstants';

export function addDeck(deck){
  return {
    type: ADD_NEW_DECK,
    deck
  }
}
