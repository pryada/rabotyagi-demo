import React from "react";
import styles from "./main-container.module.css";

const MainContainer = ({ className, children }) => {
    const cls = `${styles.container} ${className}`;
    return <main className={cls}>{children}</main>;
};

export default MainContainer;
