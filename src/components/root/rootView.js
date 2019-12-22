import React, { Component }   from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LoginContainer         from '../login/loginContainer';
import SignUpContainer        from '../signUp/signUpContainer';
import ApplicationController  from '../application/applicationContainer';
import ChatbotContainer       from '../chatbot/chatbotContainer';

class RootView extends Component {
  render () {
    const {
      navigateTo,
      loginSuccess,
      isLoggedIn,
      activeScreen,
      accessKey
    } = this.props;

    return(
      <Router>
        <Switch>
          <Route path="/chatbot">
            <ChatbotContainer />
          </Route>
          <Route path="/signup">
            <SignUpContainer navigateTo={ navigateTo } />
          </Route>
          <Route path="/login">
            { isLoggedIn ? <Redirect to="/" /> : <LoginContainer navigateTo={ navigateTo } loginSuccess={ loginSuccess } /> }
          </Route>
          <PrivateRoute path="/" isLoggedIn={ isLoggedIn }>
            <ApplicationController accessKey={ accessKey } />
          </PrivateRoute>
        </Switch>
      </Router>
    );

    // if (isLoggedIn) {
    //   return <ApplicationController accessKey={ accessKey } />;
    // } else if (activeScreen === 'signUp') {
    //   return <SignUpContainer navigateTo={ navigateTo } />;
    // } else {
    //   return <LoginContainer navigateTo={ navigateTo } loginSuccess={ loginSuccess } />;
    // }
  }
}

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = rest;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default RootView;
