import "./tocLayout.css";

const TocLayout = ({ title = "目次", items, css, navCss, contentCss, children }) => {
    return (
        <div className="toc-layout" style={css}>
            <aside className="toc-layout-nav" style={navCss}>
                <p className="toc-layout-title">{title}</p>
                {items.map((item) => (
                    <a href={item.to} key={item.to}>
                        {item.content}
                    </a>
                ))}
            </aside>

            <article className="toc-layout-content" style={contentCss}>
                {children}
            </article>
        </div>
    );
}

export default TocLayout;
