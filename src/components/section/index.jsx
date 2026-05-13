import React from "react";
import "./section.css"

const Section = ({ title, css, children }) => {
    return (
        <div className="section" style={css}>
            {title && (
                <h2 className="title">{title}</h2>
            )}
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Section;