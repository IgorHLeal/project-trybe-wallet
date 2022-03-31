import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveEmail } from '../actions';

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

  handleSubmit = () => {
    const { email } = this.state;
    const { getSaveEmail } = this.props;
    getSaveEmail(email);

    this.setState({
      redirect: true,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, buttonDisabled, redirect } = this.state;

    return (
      <div className="login">
        <h3 className="title-login">Login</h3>
        <div className="inputs-login">
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ this.handleSubmit }
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
  getSaveEmail: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  getSaveEmail: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

// ---------- REFERÊNCIAS ----------
// Regex: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

// .test: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
