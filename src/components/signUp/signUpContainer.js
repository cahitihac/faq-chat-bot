import React, { Component } from 'react';

import api  from '../../api/api'

import SignUpView from './signUpView';

class SignUpContainer extends Component {
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
      <SignUpView
        onChange={ this._handleOnChange.bind(this) }
        navigateTo={ navigateTo }
        isFormValid={ this._validateForm() }
        handleLogin={ this._handleLogin.bind(this) }
      />
    );
  }
  
  _handleLogin() {
    const { username, password } = this.state;
    const { navigateTo } = this.props;

    api.createUser({ username, password }).then((response) => {
      if (response.status === 201) {
        console.log(response);
        navigateTo('login');
      }
    }).catch((error) => {
      console.log(error);
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

export default SignUpContainer;