import './App.css';
import PersonToPerson from './pages/chat'
import Home from './pages/join_room';
import Navbar from './components/navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoomContextProvider from './context/RoomDataProvider';
//import UserContextProvider from './context/setUserContext';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  
  const {user} = useAuthContext();

  return (
    
  <RoomContextProvider>
    <div className="App w-screen h-screen bg-black overflow-hidden">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='' Component={Home} />
          <Route path='chat' Component={PersonToPerson} />
          <Route path='user/signup' Component={Signup } />
          <Route path='user/login' Component={Login} />
          {/* //<Route path='user/login' Component={login} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
    </RoomContextProvider>
    
  );
}

export default App;