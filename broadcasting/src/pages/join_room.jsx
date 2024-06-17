import { useState } from 'react';
import React from 'react';
import { useContext } from 'react';
import RoomData from '../context/Room';
import {useNavigate } from 'react-router-dom'


export default function Home(){
    
    const [username, setUsername] = useState('');
    const [room_id, setRoom_id] = useState();
    const  navigate = useNavigate();

    const {setData} = useContext(RoomData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            room_id,
            username
        }

        if(room_id && username){
            setData(data);
            navigate('/chat')
        }
    }

    const handleChangeRoom = (e) => {
        setRoom_id(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return(
        
    <div className='w-screen h-screen relative flex  justify-center items-center'>
        {/* BLUE ONE CIRCLE */}
        <div className='w-56 h-56 -top-[1rem] left-[0rem] w-[11rem] h-[11rem] lg:w-[24rem] lg:h-[24rem] xl:left-[26rem] xl:top-[0rem]  sm:-top-[0.75rem] sm:left-[7rem] absolute z-0 rounded-full  bg-gradient-to-r from-[#1845ad] to-[#23a2f6]'></div>
        {/* ORANGE CIRCLE */}
        <div className='absolute z-0 rounded-full w-[11rem] h-[11rem] xl:w-[24rem] xl:h-[24rem] xl:bottom-[6rem] xl:right-[23rem] bg-gradient-to-r from-[#ff512f] to-[#f09819] bottom:[348px] lg:bottom-[109px] right-[0rem]'></div>

        {/* BODY SECTION */}
        <div className="w-[20rem] h-[26rem] lg:w-[53rem] lg:h-[58rem] xl:w-[31rem] xl:h-[39rem] absolute z-10 flex sm:w-[17rem] sm:h-[32rem] backdrop-blur-sm bg-white/30 justify-center items-center rounded-lg hover:backdrop-blur-lg mt-32 mb-48">
            <div className="absolute  main-section  flex flex-col items-center z-10 ">
            <label className='text-white font-font1 font-medium  mb-[2rem]  xl:text-4xl '>RoomId</label>
                <input className="room_id p-3 rounded-lg  mb-10" placeholder="Room_id" onChange={handleChangeRoom} value={room_id} />
                <label className='text-white font-font1 font-medium mb-[2rem] font-poppins xl:text-4xl ' >USERNAME</label>
                <input className="username p-3 rounded-lg" placeholder="Enter your username" onChange={handleChangeUsername} value={username} />
                <button className="Submit text-white border-2 w-20 h-10 border-2 rounded-lg mt-10" onClick={handleSubmit} >Submit</button>
            </div>
        </div>
        </div>
        
    )
}