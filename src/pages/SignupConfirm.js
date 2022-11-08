import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SignupConfirm = () => {
    const navigate = useNavigate();
    const {id, token} = useParams();
    const[verified, setVerified] = useState(false)
    const[tokenExpired, setTokenExpired] = useState(false)
    const[error, setError] = useState(false)

    const verifyAccount = () => {                
        fetch(`http://localhost:9005/users/signup/verify-account/${id}/${token}`, {
            method: "POST",           
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((res) => {console.log(res)
                if(res.message === "Email verified successfully"){
                    setVerified(true)
                }
                else if(res.message === "Token expired"){
                    setTokenExpired(true)
                }
                else{
                    setError(true)
                }
            })
            .catch((e) => console.log(e));
    }

    useEffect(() => verifyAccount(), []);

    return (        
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    {verified === true &&
                    <div>
                    <h1>Account verified successfully</h1>
                    <h3>Please login to continue</h3>
                    <button onClick={() => navigate("/login")} className='btn btn-primary'>Login</button>
                    </div> } 
                    {tokenExpired === true &&
                    <h2>Token Expired</h2>}
                    {error && <h2>Internal server error</h2>}
                </div>
            </div>        
    )
}

export default SignupConfirm
