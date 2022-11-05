import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"

const ShortenUrl = () => {
    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        Ihis is shorten url page
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default ShortenUrl
