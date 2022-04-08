import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveEmail } from '../actions';
import '../styles/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
      redirect: false,
    };
  }

  handleLoginValidation = () => {
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const minLengthPassword = 6;
    const validEmail = emailRegex.test(email);

    if (validEmail && password.length >= minLengthPassword) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleClickSubmit = () => {
    const { email, password } = this.state;
    const { dispatchSaveEmail } = this.props;
    dispatchSaveEmail(email, password);

    this.setState({
      redirect: true,
    }, () => {
      this.handleLoginValidation();
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleLoginValidation();
    });
  }

  render() {
    const { email, password, buttonDisabled, redirect } = this.state;
    return (
      <div className="login">
        <h1 className="title-login">Login</h1>
        <div className="inputs-login">
          <input
            className="input-email"
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            className="input-password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <button
            className="button"
            type="button"
            disabled={ buttonDisabled }
            onClick={ () => this.handleClickSubmit() }
          >
            Entrar
          </button>
          {
            redirect && <Redirect to="/carteira" />
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveEmail: (email) => dispatch(saveEmail(email)) });

Login.propTypes = {
  dispatchSaveEmail: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

// ---------- REFERÊNCIAS ----------
// Regex: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

// .test: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
