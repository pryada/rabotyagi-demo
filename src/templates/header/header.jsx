import React from "react";

import RowSpaceBetween from "../row-space-between/row-space-between";
import styles from "./header.module.scss";

const Header = ({ left, right }) => {
    return (
        <header className={styles.container}>
            <RowSpaceBetween left={left} right={right} />
        </header>
    );
};

export default Header;
