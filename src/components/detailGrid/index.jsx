import "./detailGrid.css";

const DetailGrid = ({ items, css }) => {
    return (
        <div className="detail-grid" style={css}>
            {items.map((item) => (
                <div className="detail-grid-item" key={item.title}>
                    <h3>{item.title}</h3>
                    {item.price && (
                        <p className="detail-grid-price">{item.price}</p>
                    )}
                    {item.list ? (
                        <>
                            {item.list.map((listItem) => (
                                <p key={listItem}>{listItem}</p>
                            ))}
                        </>
                    ) : (
                        <p>{item.text}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DetailGrid;
