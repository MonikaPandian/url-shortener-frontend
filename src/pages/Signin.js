import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./signup.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
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
                                    <h3>Sign In</h3>
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">Sign in to continue</h6>
                                <form className="pt-3">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword" placeholder="Password" />
                                    </div>
                                    <div className="mb-4">
                                        <span onClick={()=>navigate("/forgot-password")} className="text-primary" style={{ cursor: "pointer", textDecoration: "underline" }}>Forgot Password ?</span>
                                    </div>
                                    <div className="mt-3">
                                        <span className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</span>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <span onClick={()=>navigate("/register")} style={{ cursor: "pointer", textDecoration: "underline" }} className="text-primary">Create</span>
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

export default Signin

