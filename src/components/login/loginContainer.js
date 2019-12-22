import React, { Component } from 'react';

import api from '../../api/api';

import LoginView from './loginView';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: ''
    }
  }

  render () {
    const { navigateTo } = this.props;

    return (
      <LoginView
        onChange={ this._handleOnChange.bind(this) }
        navigateTo={ navigateTo }
        isFormValid={ this._validateForm() }
        handleLogin={ this._handleLogin.bind(this) }
      />
    );
  }
  
  _handleLogin() {
    const { username, password } = this.state;
    const { loginSuccess } = this.props;

    api.login({ username, password }).then(response => {
      if (response.status === 200) {
        loginSuccess(response.data.accessKey);
      }
    }).catch(response => {
      console.error(response);
    });
  }

  _handleOnChange(key, value) {
      this.setState({
          [key]: value
      });
  }

  _validateForm() {
    const { username, password } = this.state;

    return !!username && !!password;
  }
}

export default LoginContainer;