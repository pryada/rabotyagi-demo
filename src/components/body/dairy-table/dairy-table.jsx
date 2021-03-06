import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus, open } from "../../../store/state";
import ModalApp from "../../modal/modal";
import styles from "./dairy-table.module.scss";

function DairyTable({ path }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterByStatus(path));
    }, [dispatch, path]);

    let list = useSelector((state) => state.data.dairys) || [];
    
    const openHandler = () => {
        dispatch(open());
    };
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.id}>ID</th>
                        <th className={styles.date}>Дата</th>
                        <th className={styles.deadline}>Дедлайн</th>
                        <th className={styles.user}>Пользователь</th>
                        <th className={styles.remained}>Осталось</th>
                        <th className={styles.chars}>Символов</th>
                        <th className={styles.status}>Статус</th>
                        <th className={styles.specialist}>Специалист</th>
                        <th className={styles.actions}>Действия</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {list.map((item) => {
                        const status =
                            item.status === "Конфликт"
                                ? `${styles.status} ${styles.conflict}`
                                : styles.status;
                        return (
                            <tr className={styles.tr} key={`${item.id}${item.user}`}>
                                <td className={styles.id}>{item.id}</td>
                                <td className={styles.date}>{item.date}</td>
                                <td className={styles.deadline}>{item.deadline}</td>
                                <td className={styles.user}>{item.user}</td>
                                <td className={styles.remained}>{item.remained}</td>
                                <td className={styles.chars}>{item.chars}</td>
                                <td className={status}>{item.status}</td>
                                <td className={styles.specialist}>{item.specialist}</td>
                                <td className={styles.actions} onClick={() => openHandler()}>
                                    {item.actions}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <ModalApp />
        </>
    );
}

export default DairyTable;
