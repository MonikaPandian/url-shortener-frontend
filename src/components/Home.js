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
                        <div className="col-md-6 mb-4 stretch-card transparent">
                            <div className="card card-dark-blue">
                                <div className="card-body">
                                    <p className="mb-4">Total Bookings</p>
                                    <p className="fs-30 mb-2">61344</p>
                                    <p>22.00% (30 days)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">Order Details</p>
                            <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                            <div className="d-flex flex-wrap mb-5">
                                <div className="me-5 mt-3">
                                    <p className="text-muted">Order value</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                                </div>
                                <div className="me-5 mt-3">
                                    <p className="text-muted">Orders</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                                </div>
                                <div className="me-5 mt-3">
                                    <p className="text-muted">Users</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted">Downloads</p>
                                    <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                                </div>
                            </div>
                            <canvas id="order-chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
