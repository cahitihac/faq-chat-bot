import React, { Component } from 'react';

import RootView from './rootView';

class RootContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessKey: '',
      activeScreen: 'login'
    }
  }

  render () {
    const { isLoggedIn, activeScreen, accessKey } = this.state;

    return (
      <RootView
        navigateTo={ this._navigateTo.bind(this) }
        loginSuccess={ this._loginSuccess.bind(this) }
        isLoggedIn={ isLoggedIn }
        activeScreen={ activeScreen }
        accessKey={ accessKey }
      />
    );
  }

  _navigateTo(destination) {
    this.setState({
      activeScreen: destination
    });
  }

  _loginSuccess(accessKey) {
    this.setState({
      isLoggedIn: true,
      accessKey
    });
  }
}

export default RootContainer;
