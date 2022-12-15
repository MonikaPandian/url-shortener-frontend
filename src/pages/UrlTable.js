import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const UrlTable = () => {
    const[urls, setUrls] = useState([])

    const getUrls = () => {
        fetch("https://url-shortener-backend-silk.vercel.app/api/url", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => {setUrls(res)})
            .catch((e) => console.log(e));
    }

    useEffect(() => getUrls(), [urls]);

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper d-flex flex-column align-items-center">
                        <table className="table table-striped w-50">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Shortened URLs</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {urls.map((url,index)=>{
                                    return (
                                        <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{url.shortUrl}</td>                                   
                                    </tr>    
                                    )
                                })}                                                          
                            </tbody>
                        </table>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default UrlTable
