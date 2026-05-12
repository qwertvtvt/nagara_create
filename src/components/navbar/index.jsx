import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = ({ title, css, links }) => {
    return (
        <nav className="nav" style={css}>
            <div className="nav-container">

                {/* 左側 タイトル */}
                <div className="nav-logo">
                    <NavLink to="/">{title}</NavLink>
                </div>

                {/* 右側 メニュー */}
                <ul className="nav-menu">
                    {links.map((link, index) => (
                        <li key={index}><NavLink to={link.to}>{link.content}</NavLink></li>
                    ))}                    
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;