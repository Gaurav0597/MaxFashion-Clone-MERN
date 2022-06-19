import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login1, loginUser } from '../../Redux/Action'

const Login = ({ setLoginUser }) => {
  const dispatch=useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const login = () => {
    axios.post('http://localhost:1020/login', user).then((res) => {
      console.log(res.data)
      dispatch(login1(res.data.user._id))
      dispatch(loginUser(res.data.user.name))
      alert(res.data.message)
    })
  }


  return (
    <div className="login">
      <h1 className="font-medium text-4xl mb-6 ">Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <Link to="/menproducts">
        {' '}
        <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-md text-white pt-2 font-medium" onClick={()=>{login()}}>
         Login
        </div>
      </Link>

      <div>or</div>
      <Link to="/register">
        <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-md text-white pt-2 font-medium">
          Register
        </div>
      </Link>
    </div>
   
  )
}

export default Login
