import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotation } from '../actions';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';
import '../styles/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    // Requisição da API
    // Acessa a prop criada no mapDispatch
    const { getCurrencyQuotation } = this.props;
    getCurrencyQuotation();
  }

  render() {
    return (
      <main>
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </main>
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
