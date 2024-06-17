import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { useContext } from "react";
import RoomData from "../context/Room";
import { useNavigate } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";

var socket = io("http://localhost:3001", { transports: ["websocket"] });

export default function PersonToPerson() {
  const [sendMessage, SetsendMessage] = useState("");
  const [receiveMessage, SetreceiveMessage] = useState([]);

  const navigate = useNavigate();

  const { Data } = useContext(RoomData);
  //console.log(Data.room_id)
  useEffect(() => {
    if (Data.room_id !== "") {
      socket.emit("join_room", Data.room_id);
    }
  }, [Data]);

  const sendMessages = async () => {
    const messages = {
      room_id: Data.room_id,
      username: Data.username,
      message: sendMessage,
    };

    await socket.emit("send_messages", messages);
    SetreceiveMessage((prev) => [...prev, messages]);
    SetsendMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      //console.log(data)
      SetreceiveMessage((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  const existChat = () => {
    localStorage.removeItem("roomData");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="main_container w-screen h-screen flex justify-center flex-col  items-center">
      <div className="message_container w-[30rem] h-[30rem] border-2 rounded-lg border-white flex flex-col justify-between  overflow-x-hidden bg-white">
        
        <div className="message_display">
          {receiveMessage.map((msg, index) => {
            return (
              <div
                className={
                  msg.username === Data.username
                    ? " w-full h-auto ml-[0.5rem] mt-[1rem] rounded-lg flex overflow-none jusitfy-start"
                    : " w-full h-auto mr-[1.5rem] mt-[1rem] rounded-lg flex overflow-none justify-end"
                }
              >
                {msg.username === Data.username ? (
                  <p
                    key={index}
                    className="p-2 mb-2 text-white rounded-lg bg-green-500 justify-start"
                  >
                    {msg.message}
                  </p>
                ) : (
                  <p
                    key={index}
                    className="w-auto p-2 mb-2 text-white rounded-lg bg-pink-500 justify-end"
                  >
                    {msg.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="message_footer w-full sticky bottom flex overflow-none mr-1 ml-1">
          <input
            className="flex-1 w-[3/4rem] border-y-0 mb-[0.5rem]"
            value={sendMessage}
            placeholder="MESSAGE..."
            onChange={(e) => {
              SetsendMessage(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 border-y-0 p-2 mr-[0.5rem] mb-[0.5rem]"
            onClick={sendMessages}
          >
            Send
          </button>
        </div>
      </div>

      <button
        className="w-[10rem] mt-[1rem] h-[2rem] rounded-lg bg-white"
        onClick={existChat}
      >
        Leave Room
      </button>
    </div>
  );
}
