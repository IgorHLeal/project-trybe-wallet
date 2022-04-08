import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/walletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalExpenses = expenses.reduce(
      (accumulator, current) => {
        const { value, currency, exchangeRates } = current;
        const currentValue = Number(value * Number(exchangeRates[currency].ask));
        return accumulator + currentValue;
      }, 0,
    ).toFixed(2);

    return (
      <header className="header-wallet">
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">
          { totalExpenses }
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

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
