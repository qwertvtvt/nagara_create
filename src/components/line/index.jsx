import "./line.css";

const Line = ({ color, css }) => {
    if(!color) color = "#000000";
    return (
        <div className="line" style={{...css, border: `1px solid ${color}` }} />
    );
}

export default Line;