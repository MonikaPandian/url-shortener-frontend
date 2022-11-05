import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                <span className="navbar-brand brand-logo me-5 ms-5">Tiny URL</span>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">                           
                <ul className="navbar-nav navbar-nav-right">                  
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                        <i className="fa-solid fa-user"></i>username
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item">
                                <i className="ti-settings text-primary"></i>
                                Settings
                            </a>
                            <a className="dropdown-item">
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
