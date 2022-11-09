import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./signup.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState("")   

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: email,                       
        }     

        fetch("https://url-shortener-110.herokuapp.com/users/forgot-password", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((res) => { console.log(res)
                // if(res.message === "user not exists!!!"){
                //     window.alert("user not exists!!!. If you are a new user sign up to create a account")
                // }
                // else if(res.message === "Account is not activated. Email sent successfully"){
                //     window.alert("Account is not activated. Account activation sent successfully to your mail")
                // }
                // else if(res.message === "Invalid credentials"){
                //     window.alert("Invalid Login credentials")
                // }
                // else if(res.message === "Successful login"){
                //     window.alert("Successful login")
                //     localStorage.setItem("userDetails", JSON.stringify(res))
                //     navigate("/dashboard")
                // }
                // else{
                //     window.alert("Internal server error. please try again later")
                // }
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
                                <Button onClick={()=>navigate("/login")} className="mainbar-button" variant="outline-light text-white m-2">Login</Button>
                                <Button onClick={()=>navigate("/register")} className="mainbar-button" variant="outline-light text-white m-2">Sign up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5" style={{ borderRadius: "10px" }}>
                                <div className="brand-logo">
                                    <h3>Forgot Password</h3>
                                </div>
                                <form onSubmit={handleSubmit} className="pt-3">
                                    <div className="form-group">
                                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control form-control-lg" id="exampleInputEmail" placeholder="Email" />
                                    </div>
                                    <div className="mt-3">
                                        <span className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SEND PASSWORD RESET MAIL</span>
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

export default ForgotPassword
