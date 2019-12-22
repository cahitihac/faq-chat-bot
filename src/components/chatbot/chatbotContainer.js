import React, { Component } from 'react';

import api from '../../api/api';

import ChatbotView from './chatbotView';

class ChatbotContainer extends Component {
  render () {
    return (
      <ChatbotView onSendMessage={ this._handleSendMessage.bind(this) } />
    );
  }

  _handleSendMessage(data, addResponseMessage) {
    api.sendMessage(data).then((response) => {
      console.log(response);
      addResponseMessage(response.data[0].text);
    }).catch((response) => {
      console.log(response);
    });
  }
}

export default ChatbotContainer;