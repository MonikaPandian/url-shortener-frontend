import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupConfirm = () => {
    const navigate = useNavigate();
  return (
    <div>
       <h1>Account verified successfully</h1>
       <h3>Please login to continue</h3>
       <button onClick={()=> navigate("/login")} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default SignupConfirm
