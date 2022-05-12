import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import './loginScreen.scss'

const LoginScreen = () => {

  const dispatch=useDispatch()

  const accessToken=useSelector(state=>state.auth.accessToken)

  const navigate = useNavigate();

  useEffect(()=>{
    if(accessToken){
      navigate('/')
    }
  }, [accessToken, navigate])

  const handleLogin = () => {
    dispatch(login())

  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://media-exp1.licdn.com/dms/image/C560BAQF9_p9J5KF09A/company-logo_200_200/0/1611760152204?e=2147483647&v=beta&t=d1CxWBkT5wUh6lw3YksDNXyGEqaibg1bwuQ67cciSl0" alt="" />
        <h4 className='logo__header'>BlindSide Task</h4>
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is for BlindSide Task using YouTube API </p>
      </div>
    </div>
  )
}

export default LoginScreen
