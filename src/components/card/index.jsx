import "./card.css"

const Card = ({ image, title, link, children }) => {
    return (
        <div className="card">
            {image && ( <img src={image} /> )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">
                    {children}
                </p>
                <br />
                <a href={link.to} className="card-button">{link.text}</a>
            </div>
        </div>
    );
}

export default Card;