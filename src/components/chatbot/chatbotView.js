import React, { Component }       from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class ChatbotView extends Component {
  constructor (props) {
    super(props);

    this.state = {
    }
  }

  render () {
    return (
      <Widget handleNewUserMessage={ (message) => this._onSendMessage(message) }/>
    );
  }

  _onSendMessage(message) {
    const { onSendMessage } = this.props;
    onSendMessage({ message }, addResponseMessage);
  }
}

export default ChatbotView;
