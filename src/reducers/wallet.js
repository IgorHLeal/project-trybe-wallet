// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_QUOTATION_SUCCESS,
  RECEIVE_CURRENCY_QUOTATION_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCY_QUOTATION_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case RECEIVE_CURRENCY_QUOTATION_FAILURE:
    return {
      ...state,
      currencies: action.error,
    };
  default:
    return state;
  }
}

export default walletReducer;
