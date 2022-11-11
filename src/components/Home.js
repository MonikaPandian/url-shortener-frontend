import React, { useState, useEffect } from 'react'
import MonthUrls from './MonthUrls'
import TodayUrls from './TodayUrls'

const Home = () => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [userDetails, setUserDetails] = useState({});
    const { username, firstName, lastName } = userDetails

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails) {
            setUserDetails(userDetails);
        }
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="row">
                        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                            <h3 className="font-weight-bold">Welcome {firstName} {lastName}</h3>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="justify-content-end d-flex">
                                <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                    <span className="btn btn-sm btn-light bg-white" id="dropdownMenuDate2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i className="fa-solid fa-calendar"></i>&nbsp;&nbsp;{date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 grid-margin transparent">
                    <div className="row">
                        <TodayUrls/>
                        <MonthUrls/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
