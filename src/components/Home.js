import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="row">
                        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                            <h3 className="font-weight-bold">Welcome Aamir</h3>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="justify-content-end d-flex">
                                <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                    <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                                    </button>
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
                                    <p className="fs-30 mb-2">4</p>
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
