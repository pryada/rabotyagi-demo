import React from "react";
import RowSpaceBetween from "../../../templates/row-space-between/row-space-between";
import styles from "./rabotyagi-header.module.scss";

const RabotyagiHeader = (props) => {
    return (
        <header className={styles.container}>
            <RowSpaceBetween
                left={
                    <div>
                        <h1 className={styles.h1}>Работяги</h1>
                    </div>
                }
                right={<button>Nazhmi</button>}
            />
        </header>
    );
};

export default RabotyagiHeader;
