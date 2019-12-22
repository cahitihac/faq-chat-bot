import React, { Component } from 'react';

import ApplicationView from './applicationView';

class ApplicationContainer extends Component {
  render () {
    const { accessKey } = this.props;

    return (
      <ApplicationView accessKey={ accessKey } />
    );
  }
}

export default ApplicationContainer;