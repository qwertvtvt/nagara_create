import "./card.css"

const Card = ({ image, title, link, css, children }) => {
    return (
        <div className="card" style={css}>
            {image && ( <img src={image} /> )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div className="card-text">
                    {children}
                </div>
                {link && (
                    <><br />
                    <a href={link.to} className="card-button" style={{ color: "#fff" }}>{link.text}</a></>
                )}
            </div>
        </div>
    );
}

export default Card;