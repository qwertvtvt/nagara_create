import React from "react";
import "./section.css"

const Section = ({ title, css, children, id }) => {
    return (
        <div className="section" style={css} id={id}>
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