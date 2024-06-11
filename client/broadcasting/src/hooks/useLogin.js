import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useLogin () {

    const [error, setError] = useState();
    const {dispatch} = useAuthContext();

    const Login = async (username, password) => {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        })

        const json = response.json();

        if(!json){
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
        }
        
    }
    return {error, Login}
}