import React from "react";
import styles from "./left-menu.module.scss";

const LeftMenu = (props) => <aside className={styles.leftMenu}>{props.children}</aside>;

export default LeftMenu;
