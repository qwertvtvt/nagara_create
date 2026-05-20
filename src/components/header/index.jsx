import { motion } from "motion/react";

import "./header.css";

const Header = ({image, id, children}) => {
    return (
        <header className="top" style={{ backgroundImage: `url("${image}")`}} id={id}>
            <div className="opacity">
                <motion.h1
                    className="top_msg"
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.h1>
            </div>
        </header>
    );
}

export default Header;
