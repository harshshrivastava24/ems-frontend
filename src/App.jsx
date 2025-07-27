// import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/DashBoard/EmployeeDash'
import AdminDash from './components/DashBoard/AdminDash'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
// import { setLocalStorageData } from './utils/localStorage'



const App = () => {

  const [user, setUser] = useState('');
  const authData = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    // localStorage.clear()
    // setLocalStorageData()
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (isLoggedIn) {
      const userData = JSON.parse(isLoggedIn)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee);
        localStorage.setItem('isLoggedIn', JSON.stringify({ role: 'employee', data: employee }));
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
      {user == 'admin' ? <AdminDash changeUser={setUser} /> : ''}
      {user == 'employee' ? <EmployeeDash changeUser={setUser} data={loggedInUser} /> : ''}
    </>
  )
}

export default App
