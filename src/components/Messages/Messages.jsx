import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import MessageChat from './Message/MessageChat';


import './Messages.css';

const Messages = ({ messages, name }) => (
  // console.log(messages)
  
   <ScrollToBottom className="messages">
    {
      messages.map((message, i) => <div key={i}>
    <MessageChat message={message} name={name}/>
    </div>)
    }
    
  </ScrollToBottom>
  
);

export default Messages;