import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useLogin () {

    const [error, setError] = useState();
    const [loading, setLoadig] = useState(true)
    const {dispatch} = useAuthContext();

    

    const Login = async (username, password) => {
        setError('');
        setLoadig(true)
        const response = await fetch('http://localhost:3000/api/user/login', {
            
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        })

        const json = response.json();

        console.log('This is json',JSON.stringify(json))

        if(!json){
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            setLoadig(false)
            dispatch({type: 'LOGIN', payload: json})
        }
        
    }
    return {error, Login, loading}
}