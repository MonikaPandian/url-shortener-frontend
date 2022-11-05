import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import ShortenUrl from '../pages/ShortenUrl';
import UrlTable from '../pages/UrlTable';
import Footer from './Footer';

const NavPage = () => {
    return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />                       
                        <Route path="/shorten-url" element={<ShortenUrl />} />
                        <Route path="/url-table" element={<UrlTable />} />
                    </Routes>
                </div>
                <Footer />
            </div>        
    )
}

export default NavPage
