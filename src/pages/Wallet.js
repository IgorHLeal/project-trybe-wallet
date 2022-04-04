import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotation } from '../actions';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  componentDidMount() {
    // Requisição da API
    /* console.log('PROPS', this.props); */
    // Acessa a prop criada no mapDispatch
    const { getCurrencyQuotation } = this.props;
    getCurrencyQuotation();
  }

  render() {
    return (
      <WalletHeader />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // Criar uma prop; Mesmo nome da função usada na requisição da api para manter um padrão;
  // Retorna o dispatch da action que chama a requisição da api;
  getCurrencyQuotation: () => dispatch(fetchCurrencyQuotation()),
});

Wallet.propTypes = {
  getCurrencyQuotation: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
