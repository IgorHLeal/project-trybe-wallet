import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotation } from '../actions';
import '../styles/wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    // Requisição da API
    /* console.log('PROPS', this.props); */
    // Acessa a prop criada no mapDispatch
    const { getCurrencyQuotation } = this.props;
    getCurrencyQuotation();
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <div className="header-wallet">
        {/* exiba o email da pessoa usuária que fez login */}
        <div data-testid="email-field">{email}</div>

        {/* Um elemento com a despesa total gerada pela lista de gastos. */}
        <div data-testid="total-field">
          Despesa total:
          {total}
        </div>

        {/* Um elemento que mostre qual câmbio está sendo utilizado */}
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  // Criar uma prop; Mesmo nome da função usada na requisição da api para manter um padrão;
  // Retorna o dispatch da action que chama a requisição da api;
  getCurrencyQuotation: () => dispatch(fetchCurrencyQuotation()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencyQuotation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
