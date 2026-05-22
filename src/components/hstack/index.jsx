import "./hstack.css"

const HStack = ({ justify_content, align_items, css, children }) => {
    const hstackStyle = {
        ...css,
        ...(justify_content && { justifyContent: justify_content }),
        alignItems: align_items || css?.alignItems || "stretch"
    };

    return (
        <div className="hstack" style={hstackStyle}>
            {children}
        </div>
    );
}

export default HStack;
