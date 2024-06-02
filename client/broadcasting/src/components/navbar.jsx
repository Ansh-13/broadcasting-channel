import { useContext } from "react"
import RoomData from "../context/Room"

export default function Navbar () {
    

    const {Data} = useContext(RoomData);

    if(Data.username){
        var username = Data.username;
    } 
    else{
        var username = 'Anonymous';
    }
    return (
        <div className="w-screen h-12 mx-4 my-4 flex flex-row justify-between rounded-full p-1 ">
            <div className="flex flex-row items-center mx-4">
                <nav className="text-white mx-4 "><a>Home</a></nav>
                <nav className="text-white mx-4 "><a href="/chat">Chat</a></nav>
                <nav className="text-white mx-4 "><a>Global</a></nav>
            </div>
            <div className="flex items-center mx-4">
                <nav className="text-white mx-4">{username}</nav>
            </div>
        </div>
        
    )
}