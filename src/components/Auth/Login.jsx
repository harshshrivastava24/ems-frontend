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
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center p-8 rounded-xl border-2 border-emerald-800 shadow-md shadow-emerald-800'>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-6 items-center p-5'>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' className='border-2 rounded-full text-white placeholder:text-gray-400 px-3 py-3 border-emerald-600' />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' className='border-2 rounded-full text-white placeholder:text-gray-400 px-3 py-3 border-emerald-600' />
                    <button type='submit' className='text-emerald-300 bg-emerald-700 border-none rounded-lg w-[50%] px-3 py-3 mt-2'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login