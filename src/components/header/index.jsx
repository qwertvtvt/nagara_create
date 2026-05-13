import React from "react";

import "./header.css";

const Header = ({image, children}) => {
    return (
        <header className="top" style={{ backgroundImage: `url("${image}")`}}>
            <div className="opacity">
                <h1 className="top_msg">{children}</h1>
            </div>
        </header>
    );
}

export default Header;