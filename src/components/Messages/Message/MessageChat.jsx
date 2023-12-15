import React from 'react';

import './Message.css';

// import ReactEmoji from 'react-emoji';

const MessageChat = ( { message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }
  console.log(user);

  return (
  isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{user}</p>
            </div>
            <p className="sentText pl-10 ">{text}</p>
          </div>
  
        )
    
  );
}

export default MessageChat;