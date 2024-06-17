import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export default function useSignup () {
    const [error, setError] = useState(null);
    const [loading, setLoadig] = useState(true)
    const {dispatch} = useAuthContext();

    const signup = async (username, password) => {
        setError('');
        setLoadig(true)
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        })
        const json = await response.json();
        if(!json){
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            setLoadig(false)
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return { signup, error, loading }
}