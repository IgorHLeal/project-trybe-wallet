import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/walletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { email, expenses } = this.props;
    /* console.log(expenses); */

    const totalExpenses = expenses.reduce(
      (accumulator, current) => {
        const { value, currency, exchangeRates } = current;
        const currentValue = Number(value * Number(exchangeRates[currency].ask));
        return accumulator + currentValue;
      }, 0,
    ).toFixed(2);

    return (
      <header className="header-wallet">
        {/* exiba o email da pessoa usuária que fez login */}
        <div data-testid="email-field">{email}</div>

        {/* Um elemento com a despesa total gerada pela lista de gastos. */}
        <div data-testid="total-field">
          Despesa total:
          { totalExpenses }
        </div>

        {/* Um elemento que mostre qual câmbio está sendo utilizado */}
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

/* WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
}; */

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.shape({
      ask: PropTypes.string,
    })).isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
