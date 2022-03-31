// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const WALLET = 'WALLET';

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: action.wallet.currencies,
      expenses: action.wallet.currencies,
    };
  default:
    return state;
  }
}

export default walletReducer;
