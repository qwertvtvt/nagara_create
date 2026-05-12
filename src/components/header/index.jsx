import React from "react";

import "./header.css";

const Header = ({image, children}) => {
    return (
        <header className="top" style={{ backgroundImage: `url("${image}")`}}>
            <h1 className="top_msg">{children}</h1>
        </header>
    );
}

export default Header;