import React from "react";
import styles from "./profile-menu.module.scss";

const ProfileMenu = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}></div>
            <div className={styles.column}>
                <span className={styles.name}>Имярек имярек</span>
                <span className={styles.role}>администратор</span>
            </div>
        </div>
    );
};

export default ProfileMenu;
