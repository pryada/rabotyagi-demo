import React from "react";
import styles from "./left-menu-items.module.scss";
import { NavLink } from "react-router-dom";

const leftMenuCaptions = [
    { title: "Дневники", link: "/dairys" },
    { title: "Работяги", link: "/rabotyagi" },
];

const LeftMenuItems = (props) => {
    return (
        <nav className={styles.column}>
            <div className={styles.itemsContainer}>
                <div className={styles.logo}>LOGO</div>

                {leftMenuCaptions.map((menu) => {
                    return (
                        <NavLink
                            to={menu.link}
                            activeClassName={styles.active}
                            className={styles.item}
                            key={menu.link}
                        >
                            <div className={styles.marker} />
                            <span className={styles.caption}>{menu.title}</span>
                        </NavLink>
                    );
                })}
            </div>

            <NavLink to="/exit" activeClassName={styles.active} className={styles.settings}>
                <div className={styles.marker} />
                <span className={styles.caption}>Выход</span>
            </NavLink>
        </nav>
    );
};

export default LeftMenuItems;
