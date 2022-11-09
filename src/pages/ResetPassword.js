import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./signup.css"
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const {id, token} = useParams();
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatePassword = {
           password: newPassword                     
        }     

        fetch(`http://localhost:9005/users/reset-password/${id}/${token}`, {
            method: "POST",
            body: JSON.stringify(updatePassword),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((res) => { console.log(res)
                if(res.message === "User not exists!!"){
                    window.alert("User not exists!!!. If you are a new user sign up to create an account")
                }
                else if(res.message === "Password updated"){
                    window.alert("Password updated")
                }
                else if(res.message === "Token expired"){
                    window.alert("Token expired")                                     
                }
                else{
                    window.alert("Internal server error. please try again later")
                }
            })
            .catch((e) => console.log(e));
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="mainbar" >
                    <Container>
                        <Navbar.Brand>Tiny URL</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Button onClick={()=>navigate("/login")}  className="mainbar-button" variant="outline-light text-white m-2">Login</Button>
                                <Button onClick={()=>navigate("/register")}  className="mainbar-button" variant="outline-light text-white m-2">Sign up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5" style={{ borderRadius: "10px" }}>
                                <div className="brand-logo">
                                    <h3>Reset Password</h3>
                                </div>
                                <form onSubmit={handleSubmit} className="pt-3">
                                    <div className="form-group">
                                        <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail" placeholder="New Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail" placeholder="Confirm Password" />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">UPDATE PASSWORD</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword

