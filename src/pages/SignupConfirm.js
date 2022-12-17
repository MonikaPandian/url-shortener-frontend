import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SignupConfirm = () => {
    const navigate = useNavigate();
    const { id, token } = useParams();
    const [verified, setVerified] = useState(false)
    const [tokenExpired, setTokenExpired] = useState(false)
    const [error, setError] = useState(false)

    const verifyAccount = () => {
        fetch(`https://url-shortener-backend-five.vercel.app/users/signup/verify-account/${id}/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((res) => {
                if (res.message === "Email verified successfully") {
                    setVerified(true)
                }
                else if (res.message === "Token expired") {
                    setTokenExpired(true)
                }
                else {
                    setError(true)
                }
            })
            .catch((e) => console.log(e));
    }

    useEffect(() => verifyAccount(), []);

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    {verified === true &&
                        <div>
                            <h1>Account verified successfully</h1>
                            <h3>Please login to continue</h3>
                        </div>}
                    {tokenExpired === true &&
                        <h2>Token Expired. Please login again to generate a new account activation link.</h2>}
                    {error && <h2>Internal server error</h2>}
                </div>
            </div>
        </div>
    )
}

export default SignupConfirm
