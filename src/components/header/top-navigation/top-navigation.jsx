import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./top-navigation.module.scss";

const topMenuCaptions = [
    { title: "Все", link: "/dairys" },
    { title: "Новые", link: "/dairys/new" },
    { title: "Прикреплённые", link: "/dairys/pinned" },
    { title: "Конфликты", link: "/dairys/conflicts" },
];

const TopNavigation = (props) => {
    return (
        <nav className={styles.navigation}>
            {topMenuCaptions.map((menu) => {
                return (
                    <NavLink
                        exact
                        to={menu.link}
                        activeClassName={styles.active}
                        key={menu.link}
                        className={styles.link}
                    >
                        <div className={styles.block}>
                            <span className={styles.item}>{menu.title}</span>
                        </div>
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default TopNavigation;
