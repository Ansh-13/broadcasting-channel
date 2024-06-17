import { useContext } from "react";
import {AuthContext} from "../context/AuthContextProvider";

export const useAuthContext =  () => {
    const context = useContext(AuthContext)

     if(!context){
        
         throw Error("hello world")  
     }

    return context;
}