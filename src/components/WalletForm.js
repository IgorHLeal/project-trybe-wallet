import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyQuotation, saveExpenses } from '../actions';
import '../styles/walletForm.css';

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.alimentacao = 'Alimentação';

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: this.alimentacao,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Requisito 6
  // Usar lógica parecida com a do componente Login
  handleClickSubmit = async (event) => {
    event.preventDefault();
    const { dispatchSaveExpenses, expenses, newRates } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const { dispatchRates } = this.props;
    await dispatchRates();
    const response = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: newRates,
    };
    /* console.log(dispatchSaveExpenses); */
    await dispatchSaveExpenses(response);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: this.alimentacao,
    });
  }

  render() {
    const { currencies } = this.props;
    /* console.log(currencies); */
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="wallet-form">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((element) => (
              <option
                value={ element }
                key={ element }
              >
                { element }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button
          className="button"
          type="submit"
          onClick={ this.handleClickSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  newRates: state.wallet.newRates,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveExpenses: (expenses) => dispatch(saveExpenses(expenses)),
  dispatchRates: (expenses) => dispatch(fetchCurrencyQuotation(expenses)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchSaveExpenses: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
