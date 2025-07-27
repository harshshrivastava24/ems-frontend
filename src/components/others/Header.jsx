import React from 'react'

const Header = ({ data, changeUser }) => {
    // console.log(data)
    const logOutUser = () => {
        localStorage.setItem('isLoggedIn', '')
        changeUser('')
    }

    return (
        <>
            <div className='flex items-end justify-between text-white'>
                <h1 className='text-xl font-semibold'>Hello <br /> {data?.firstName ? <span className='text-2xl font-bold'>{data.firstName} 👋!</span> : <span className='text-2xl font-bold'>Admin 👋!</span>}</h1>
                <button className='border-none rounded-lg bg-red-600 p-2' onClick={logOutUser}>Logout</button>
            </div>
        </>
    )
}

export default Header