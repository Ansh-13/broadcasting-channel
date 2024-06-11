import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export default function useSignup () {
    const [error, seterror] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (username, password) => {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        })
        const json = await response.json();
        if(!json){
            seterror(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return { signup, error }
}