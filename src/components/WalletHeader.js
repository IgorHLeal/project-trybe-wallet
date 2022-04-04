import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/walletHeader.css';

class WalletHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <header className="header-wallet">
        {/* exiba o email da pessoa usuária que fez login */}
        <div data-testid="email-field">{email}</div>

        {/* Um elemento com a despesa total gerada pela lista de gastos. */}
        <div data-testid="total-field">
          Despesa total:
          {total}
        </div>

        {/* Um elemento que mostre qual câmbio está sendo utilizado */}
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
