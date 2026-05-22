import "./hstack.css"

const HStack = ({ justify_content, align_items, css, children }) => {
    return (
        <div className="hstack" style={{
            justifyContent: justify_content,
            alignItems: align_items
        }}>
            {children}
        </div>
    );
}

export default HStack;