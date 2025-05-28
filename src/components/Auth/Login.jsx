import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    }

    return (
        <div className='flex items-center justify-center h-screen bg-[#1c1c1c]'>
            <div className='flex flex-col items-center justify-center p-8 rounded-xl border-2 hover:border-4 border-emerald-700 hover:shadow-md transition-all duration-250 shadow-emerald-800'>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-6 items-center p-5'>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' className='border-2 rounded-full text-white placeholder:text-gray-400 px-3 py-3 border-emerald-600 w-[350px]' />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' className='border-2 rounded-full text-white placeholder:text-gray-400 px-3 py-3 border-emerald-600 w-[350px]' />
                    <button type='submit' className='text-white bg-emerald-500 hover:bg-emerald-600 transition duration-200 border-none rounded-lg w-[50%] px-3 py-3 mt-2'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login