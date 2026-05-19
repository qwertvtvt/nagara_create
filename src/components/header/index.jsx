import { motion } from "motion/react";

import "./header.css";

const Header = ({image, children}) => {
    return (
        <header className="top" style={{ backgroundImage: `url("${image}")`}}>
            <div className="opacity">
                <motion.h1
                    className="top_msg"
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    {children}
                </motion.h1>
            </div>
        </header>
    );
}

export default Header;
