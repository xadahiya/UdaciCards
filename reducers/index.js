import {ADD_NEW_DECK, RECIEVE_DECKS, ADD_CARD} from '../utils/ActionConstants';

function reducer(state = {}, action) {

  switch (action.type) {
    case ADD_NEW_DECK:
      const deck = action.deck
      return {
        ...state,
        ...deck
      }
    case RECIEVE_DECKS:
      return action.decks

    case ADD_CARD:
      return {
        ...state,
      [action.deck_id]: {
          ...state[action.deck_id],
          'questions': [
            ...state[action.deck_id]['questions'],
            action.card
          ]
        }
      }
    default:
      return state

  }
}

export default reducer
