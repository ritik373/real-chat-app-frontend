import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JoinRoom from './components/join/JoinRoom.jsx'
// import In from './components/infoBar/infoBar.jsx'
import ChatAdmin from './components/chat/ChatAdmin.jsx'
// import InfoBar from './components/infoBar/infoBar.jsx'





function App() {


  return (
    <>
    {/* <h1>hello world</h1> */}
    <Routes>
    <Route path='/'  element={<JoinRoom/>}  />
    <Route path='/chat'  element={<ChatAdmin/>}  />
    {/* <Route path='/info'  element={<InfoBar/>}  /> */}
    {/* <Route path='/msgchat' element={<MessageChat/>}/> */}
    </Routes>

    </>
  )
}

export default App
