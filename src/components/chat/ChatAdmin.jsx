import QueryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Input from '../Input/Input';
import InfoBar from '../infoBar/infoBar';
import Messages from '../messages/Messages';
import './ChatAdmin.css';

// import './ChatAdmin.css';




let EndPoint = 'http://localhost:5000';

let socket;

function ChatAdmin(props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = QueryString.parse(location.search);

    // console.log("name=",name,"room=",room)
    socket = io(EndPoint);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room },(error)=>{
      alert(error);
      
    });


    console.log(socket);
    // console.log("again call after change");


  }, [EndPoint, location.search]);

  useEffect(() => {

    socket.on('message', message => {
      // console.log(message);
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  },[]);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    

    if (message) {
      socket.emit('sendMessage', message, () =>setMessage(''));
    
    }
  }
  return (
    <div>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        {/* <TextContainer users={users}/> */}
      </div>

    </div>

  );
};

export default ChatAdmin;