import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"
import "./shortenUrl.css"

const ShortenUrl = () => {
    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className='d-flex flex-column justify-content-center align-items-center m-4'>
                                <h3 className='m-4'>Shrink your link</h3>
                                <h5>A long URL is hard to remember and share. So shrink it to use it better.</h5>
                            </div>
                            <div className="input-group mb-3 w-75">
                                <input type="text" className="form-control" placeholder="Paste the link to shrink it" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" type="button" id="button-addon2">Shrink</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ShortenUrl
