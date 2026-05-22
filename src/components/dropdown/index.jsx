import "./dropdown.css"

const DropDown = ({ lists }) => {
    return (
        <div className="gnavi_wrap" style={{ "--length": lists.length }}>
            <ul className="gnavi_lists">
                {lists.map((list, index1) => (
                    <li className="gnavi_list" key={index1}>
                        <button>{list.title}</button>
                        <ul className="dropdown_lists">
                            {list.links.map((link, index2) => (
                                <li className="dropdown_list" key={index2}><a href={link.to}>{link.content}</a></li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropDown;