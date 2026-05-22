import React from "react";
import { NavLink } from "react-router-dom";

import './navbar.css';

const Navbar = ({ title, css, center, links }) => {
    return (
        <nav className="nav" style={css}>
            <div className="nav-container">

                {/* 左側 タイトル */}
                <div className="nav-logo">
                    <a href="#top">{title}</a>
                </div>          

                {/* 右側 メニュー */}
                <ul className="nav-menu">
                    {links}                   
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;