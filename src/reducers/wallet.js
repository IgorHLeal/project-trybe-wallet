// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_QUOTATION_SUCCESS,
  RECEIVE_CURRENCY_QUOTATION_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCY_QUOTATION_SUCCESS:
    return {
      ...state,
      // Object.keys retorna um array e o filter remove a opção USDT
      currencies: Object.keys(action.currencies)
        .filter((element) => element !== 'USDT'),
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

// ---------- REFERÊNCIAS ----------

// Object.keys: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
