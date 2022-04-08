import getCurrencyQuotation from '../services/api';

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
export const GET_RATES = 'GET_RATES';
export const RECEIVE_RATES_SUCCESS = 'RECEIVE_RATES_SUCCESS';
export const RECEIVE_RATES_FAILURE = 'RECEIVE_RATES_FAILURE';

export const saveExpenses = (data) => ({
  type: SAVE_EXPENSES,
  data,
});

export const requestRates = () => ({
  type: GET_RATES,
});

export const receiveRatesSuccess = (currencies) => ({
  type: RECEIVE_RATES_SUCCESS,
  currencies,
});

export const receiveRatesFailure = (error) => ({
  type: RECEIVE_RATES_FAILURE,
  error,
});

export function fetchRates() {
  return async (dispatch) => {
    dispatch(requestRates());
    try {
      const data = await getCurrencyQuotation();
      dispatch(receiveRatesSuccess(data));
    } catch (error) {
      dispatch(receiveRatesFailure(error));
    }
  };
}
