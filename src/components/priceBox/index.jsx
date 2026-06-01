import "./priceBox.css";

const PriceBox = ({ items, css }) => {
    return (
        <div className="price-box" style={css}>
            <dl>
                {items.map((item) => (
                    <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default PriceBox;
