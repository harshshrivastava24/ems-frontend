import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex items-end justify-between text-white'>
                <h1 className='text-xl font-semibold'>Hello <br /> <span className='text-2xl font-bold'>Harsh 👋!</span></h1>
                <button className='border-none rounded-lg bg-red-600 p-2'>Logout</button>
            </div>
            <div></div>
        </>
    )
}

export default Header