import React from "react";
import RowSpaceBetween from "../../../templates/row-space-between/row-space-between";
import styles from "./dairy-header.module.scss";

const DairyHeader = (props) => {
    return (
        <header className={styles.container}>
            <RowSpaceBetween
                left={
                    <div>
                        <h1 className={styles.h1}>Дневники</h1>
                        <p className={styles.p}>Списки дневников переданные на анализ</p>
                    </div>
                }
            />
        </header>
    );
};

export default DairyHeader;
