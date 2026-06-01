import "./detailGrid.css";

const DetailGrid = ({ items, css }) => {
    return (
        <div className="detail-grid" style={css}>
            {items.map((item) => (
                <div className="detail-grid-item" key={item.title}>
                    <h3>{item.title}</h3>
                    {item.list ? (
                        <ul>
                            {item.list.map((listItem) => (
                                <li key={listItem}>{listItem}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{item.text}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DetailGrid;
