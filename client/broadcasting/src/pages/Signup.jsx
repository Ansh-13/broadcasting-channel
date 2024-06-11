import { useState } from "react"
import useSignup from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <div className="w-1/2 h-[40rem] bg-white rounded-md flex flex-col justify-between items-center  p-[2rem]">
      <h3 className="text-black text-5xl font-bold">Sign Up</h3>
      <div className="flex flex-col justify-between">
      <label className="text-black text-xl font-semibold">Email address:</label>
      <input 
        className="w-[20rem] h-[2rem] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff512f] sm:text-sm sm:leading-6"
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </div>
      <div className="flex flex-col justify-between">
      <label className="text-black text-xl font-semibold">Password:</label>
      <input 
      className="w-[20rem] h-[2rem] focus:outline-0 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff512f] sm:text-sm sm:leading-6"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
</div>
      <button className="w-[20rem] h-[2rem] bg-[#ff512f] border-2 rounded-md leading-6 shadow-sm hover:bg-indigo-500 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Sign up</button>
      {error && <div className="text-white">{error}</div>}
      </div>
    </form>
  )
}

export default Signup