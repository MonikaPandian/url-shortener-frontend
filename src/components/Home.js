import React, { useState, useEffect } from 'react'

const Home = () => {
    const [todayUrls, setTodayUrls] = useState(null)
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

    const getTodayUrls = () => {
        fetch("https://url-shortener-110.herokuapp.com/api/url/today", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTodayUrls(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTodayUrls, [todayUrls]);

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
                        <div className="col-md-6 stretch-card transparent">
                            <div className="card card-dark-blue">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <p className="mb-4">Number of URLs created today</p>
                                    <p className="fs-30 mb-2">{todayUrls}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 stretch-card transparent">
                            <div className="card card-light-danger">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <p className="mb-4">Number of URLs created this month</p>
                                    <p className="fs-30 mb-2">50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
