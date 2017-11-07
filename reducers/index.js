import {ADD_NEW_DECK} from '../utils/ActionConstants';

function reducer(state={}, action){

  switch (action.type){
    case ADD_NEW_DECK:
      const deck = action.deck
      return {...state, ...deck}
    default:
    return state

  }
}

export default reducer
