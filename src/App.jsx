// import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/DashBoard/EmployeeDash'
import AdminDash from './components/DashBoard/AdminDash'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorageData } from './utils/localStorage'


const App = () => {

  useEffect(() => {
    setLocalStorageData()
  })

  const [user, setUser] = useState('');
  const authData = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState();

  const handleLogin = (email, password) => {
    if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee);
        localStorage.setItem('isLoggedIn', JSON.stringify({ role: 'employee' }));
      }
    }
    else if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('isLoggedIn', JSON.stringify({ role: 'admin' }));

    }
    else {
      alert('Invalid Credentials');
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDash /> : ''}
      {user == 'employee' ? <EmployeeDash data={loggedInUser} /> : ''}
    </>
  )
}

export default App
