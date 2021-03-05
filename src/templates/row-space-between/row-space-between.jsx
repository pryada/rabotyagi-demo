import React from "react";
import styles from "./row-space-between.module.scss";

const RowSpaceBetween = ({ left, right }) => (
    <div className={styles.wrapper}>
        <div className={styles.block}>{left}</div>
        <div className={styles.block}>{right}</div>
    </div>
);

export default RowSpaceBetween;
