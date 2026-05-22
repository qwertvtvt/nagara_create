import "./card.css"

const Card = ({ image, title, link, css, titleCss, children }) => {
    const cardStyle = css?.width
        ? { ...css, flexBasis: css.width }
        : css;

    return (
        <div className="card" style={cardStyle}>
            {image && ( <img src={image} /> )}
            <div className="card-content">
                <h3 className="card-title" style={titleCss}>{title}</h3>
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
