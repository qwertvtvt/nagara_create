import React from "react";

import "./footer.css"

const Footer = ({ author, css }) => {
    return (
        <footer className="footer" style={css}>
            &copy; {new Date().getFullYear()} {author} All Rights Reserved.
        </footer>
    );
}

export default Footer;