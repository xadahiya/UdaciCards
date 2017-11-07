import {ADD_NEW_DECK, RECIEVE_DECKS, ADD_CARD} from '../utils/ActionConstants';

export function addDeck(deck) {
  return {type: ADD_NEW_DECK, deck}
}

export function receiveDecks(decks) {
  return {type: RECIEVE_DECKS, decks}
}
export function addCard(deck_id, card) {
  return {type: ADD_CARD, deck_id, card}
}
