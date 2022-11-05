import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from "../components/Home"
import Footer from '../components/Footer'

const Dashboard = () => {
    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Home />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
