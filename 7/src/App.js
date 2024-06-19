import './App.css';
import PersonToPerson from './pages/chat'
import Home from './pages/join_room';
import Navbar from './components/navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoomContextProvider from './context/RoomDataProvider';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  
  const {user} = useAuthContext();

  return (
    
  <RoomContextProvider>
    <div className="App w-screen h-screen bg-black overflow-hidden">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route
          path=''
          element={user ? <Home /> : <Login />}
          //element={<Home />}
          />
          <Route path='chat'
          
          element={user ?<PersonToPerson />: <Login />}
          />
          <Route path='user/signup'
          element={ <Signup />}
          />
          <Route path='user/login' 
          element={<Login />}
          />
          {/* //<Route path='user/login' Component={login} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
    </RoomContextProvider>
    
  );
}

export default App;