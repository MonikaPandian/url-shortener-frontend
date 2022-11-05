import React from 'react';
import {FaHome, FaTable, FaCut} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const activeLink = 'nav-link-active'
    const normalLink = 'nav-link'

    const SidebarData=[
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },          
          {
            title: "Shorten URL",
            path: "/shorten-url",
            icon: <FaCut/>,
          },
          {
            title: "Short URLs Table",
            path: "/url-table",
            icon: <FaTable/>,
          },                   
    ]

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">

                {SidebarData.map((item, index)=>{
                    return(
                        <li className="nav-item" key= {index}>
                        <NavLink   to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span className='me-3'>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>                        
                     </li>
                    )
                })}
               
            </ul>
        </nav>
    )
}

export default Sidebar

