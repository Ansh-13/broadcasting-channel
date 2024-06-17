import { useState } from "react"
import  useLogin  from "../hooks/useLogin"
import { redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {Login, error, loading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Login(username, password)

    if(!loading) {
      return redirect("/");
    }

  }

  return (
    
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <div className="w-1/2 h-[40rem] bg-white rounded-md flex flex-col justify-between items-center  p-[2rem]">
      <h3 className="text-black text-5xl font-bold">Log In</h3>

      <div className="flex flex-col justify-between">
      
      <label className="text-black text-xl font-semibold">Username:</label>
      <input 
        type="text" 
        className="w-[20rem] h-[2rem] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff512f] sm:text-sm sm:leading-6"
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />

</div>
<div className="flex flex-col justify-between">
      <label className="text-black text-xl font-semibold">Password:</label>
      <input 
        type="password" 
        className="w-[20rem] h-[2rem] focus:outline-0 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff512f] sm:text-sm sm:leading-6"
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

</div>
      <button className="w-[20rem] h-[2rem] bg-[#ff512f] border-2 rounded-md leading-6 shadow-sm hover:bg-indigo-500 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>

      <div className="flex flex-row">
      <p className="mr-[0.5rem]"> Don't have an account </p> <a href="/user/signup" className="text-blue-300 hover:text-blue-600 hover:font-semibold">Click here</a>
      </div>
      {error && <div className="bg-white">{error}</div>}
      </div>
    </form>
    
  )
}

export default Login