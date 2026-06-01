import "./articleSection.css";

const ArticleSection = ({
    id,
    eyebrow,
    title,
    titleLevel = "h2",
    description,
    aside,
    css,
    headerCss,
    asideCss,
    bodyCss,
    children
}) => {
    const Heading = titleLevel;

    return (
        <section className="article-section" id={id} style={css}>
            <div className="article-section-header" style={headerCss}>
                <div>
                    {eyebrow && (
                        <p className="article-section-eyebrow">{eyebrow}</p>
                    )}
                    {title && (
                        <Heading>{title}</Heading>
                    )}
                    {description && (
                        <p className="article-section-description">{description}</p>
                    )}
                </div>

                {aside && (
                    <div className="article-section-aside" style={asideCss}>
                        {aside}
                    </div>
                )}
            </div>

            {children && (
                <div className="article-section-body" style={bodyCss}>
                    {children}
                </div>
            )}
        </section>
    );
}

export default ArticleSection;
