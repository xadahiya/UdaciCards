import {ADD_NEW_DECK} from '../utils/ActionConstants';

function reducer(state={}, action){

  switch (action.type){
    case ADD_NEW_DECK:
      return {...state, decks:[...state.decks, [action.deck]]}
    default:
    return state

  }
}

export default reducer
