import React from "react";
import styles from "./search.module.scss";
import { SearchIcon } from "../../../icons/search/search";
import { useDispatch } from "react-redux";

const Search = ({ filterHandler }) => {
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        e.preventDefault();
        dispatch(filterHandler(e.target.value));
    };

    return (
        <div className={styles.search}>
            <SearchIcon className={styles.icon} height={14} width={14} />
            <input
                type="search"
                placeholder="Поиск..."
                className={styles.input}
                onChange={inputHandler}
            ></input>
        </div>
    );
};

export default Search;
