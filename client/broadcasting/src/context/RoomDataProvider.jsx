import React, { useState } from "react";
import RoomData from "./Room";

export default function RoomDataProvider ({children})  {
    const [Data, setData] = useState([]);
    return(
        <RoomData.Provider value={{Data, setData}}>
            {children}
        </RoomData.Provider>
    )

}