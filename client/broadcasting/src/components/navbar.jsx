import { useContext, useState } from "react"
import RoomData from "../context/Room"
import { useAuthContext } from '../hooks/useAuthContext';
import useLogout from "../hooks/useLogout";

export default function Navbar () {

    //const [username, setusername] = useState('Anonymous')
    
    const {Data} = useContext(RoomData);
    const {user} = useAuthContext();

    const {logout} = useLogout();

    const handleClick = () => {
        localStorage.removeItem('RoomData')
        logout();
    }

    var username = 'Anonymous'

    if(Data.username != null){
        username = Data.username
    }
    
        return (
            <div className="w-screen h-12 mx-4 my-4 flex flex-row justify-between rounded-full p-1 ">
                {user && (
                <div className="flex flex-row items-center mx-4">
                    <nav className="text-white mx-4 "><a href="/">Home</a></nav>
                    <nav className="text-white mx-4 "><a href="/chat">Chat</a></nav>
                    
                    <nav><button className="text-white" onClick={handleClick}>Logout</button></nav>
                </div>
                )}
                {!user && (
                    <div className="flex flex-row items-center mx-4">
                    <nav className="text-white mx-4 "><a href="/user/login">Login</a></nav>
                    <nav className="text-white mx-4 "><a href="/user/signup">Signup</a></nav>
                    <nav><button onClick={handleClick}>Logout</button></nav>
                </div>
                )}
                
                <div className="flex items-center mx-4">
                    <nav className="text-white mx-4">{username}</nav>
                </div>
            </div>
            
        )
    
}