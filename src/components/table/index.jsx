import "./line.css";
import "./hstack.css";

const Table = ({ items, color, css }) => {
    if(!color) color = "#c5c5c5";

    const hstackStyle = {
        padding: "20px",
        alignItems: "stretch"
    };

    return (
        <div>
            {items.map((item, idx) => (
                <div key={idx}>
                    <div className="line" style={{ borderBottom: `1px solid ${color}` }} />
                    <div className="hstack" style={hstackStyle}><span style={{ width: "20%" }}>{item.title}</span><span>{item.content}</span></div>
                </div>
            ))}
            <div className="line" style={{ borderBottom: `1px solid ${color}` }} />
        </div>
    );
}

export default Table;