import getCurrencyQuotation from '../services/api';
import getSaveExpenses from '../services/saveExpensesAPI';

// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCY_QUOTATION = 'REQUEST_CURRENCY_QUOTATION';
export const RECEIVE_CURRENCY_QUOTATION_SUCCESS = 'RECEIVE_CURRENCY_QUOTATION_SUCCESS';
export const RECEIVE_CURRENCY_QUOTATION_FAILURE = 'RECEIVE_CURRENCY_QUOTATION_FAILURE';

// Action creators
export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencyQuotation = () => ({
  type: REQUEST_CURRENCY_QUOTATION,
});

export const receiveCurrencyQuotationSuccess = (currencies) => ({
  type: RECEIVE_CURRENCY_QUOTATION_SUCCESS,
  currencies,
});

export const receiveCurrencyQuotationFailure = (error) => ({
  type: RECEIVE_CURRENCY_QUOTATION_FAILURE,
  error,
});

// Criação do thunk para fazer a requisição da API
export function fetchCurrencyQuotation() {
  return async (dispatch) => {
    // Iniciando o fetch
    dispatch(requestCurrencyQuotation());
    try {
      // faz o fetch da api; Requisição feita em no arquivo services
      const data = await getCurrencyQuotation();
      // Dispara o sucesso da requisição;
      dispatch(receiveCurrencyQuotationSuccess(data));
    } catch (error) {
      dispatch(receiveCurrencyQuotationFailure(error));
    }
  };
}

// Requisito 6
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const SAVE_EXPENSES_SUCCESS = 'SAVE_EXPENSES_FAILURE';
export const SAVE_EXPENSES_FAILURE = 'SAVE_EXPENSES_FAILURE';

export const saveExpenses = () => ({
  type: SAVE_EXPENSES,
});

export const saveExpensesSuccess = (expenses) => ({
  type: SAVE_EXPENSES_SUCCESS,
  expenses,
});

export const saveExpensesFailure = (error) => ({
  type: SAVE_EXPENSES_FAILURE,
  error,
});

export function fetchExpenses() {
  return async (dispatch) => {
    dispatch(saveExpenses());
    try {
      const data = await getSaveExpenses();
      dispatch(saveExpensesSuccess(data));
    } catch (error) {
      dispatch(saveExpensesFailure(error));
    }
  };
}
