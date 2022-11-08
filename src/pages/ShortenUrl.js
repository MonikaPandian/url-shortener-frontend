import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"
import "./shortenUrl.css"

const ShortenUrl = () => {
    const [newLongUrl, setNewLongUrl] = useState("")
    const[newShortUrl, setNewShortUrl] = useState("")

    const addUrl = () => {       
        const newUrl = {
            longUrl: newLongUrl
        }      
        fetch("https://url-shortener-110.herokuapp.com/api/url/shorten", {
            method: "POST",
            body: JSON.stringify(newUrl),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((data)=> data.json())
        .then((data)=> { 
            if(data.message === "success"){
                setNewShortUrl(data.shortUrl)
            }
            else if(data === "Invalid longUrl"){
                window.alert("Invalid long Url")
            }
            else{
                window.alert("Server Error")
            }
        })
        .catch((error)=>console.log(error))
    }

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
                            <div className="input-group mb-5 w-75">
                                <input type="text" className="form-control" value={newLongUrl} placeholder="Paste the link to shrink it" onChange={(e)=>setNewLongUrl(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" onClick={addUrl} type="button" id="button-addon2">Shrink</button>
                            </div>
                            {newShortUrl &&
                            <div className="border border-dark p-3 bg-white">                               
                                <span style={{fontSize:"15px",fontWeight:"bold"}}>Short Url:</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href={newShortUrl} target="_blank">{newShortUrl}</a>
                            </div>}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ShortenUrl
