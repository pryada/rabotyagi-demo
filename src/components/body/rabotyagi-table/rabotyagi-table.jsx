import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRabotyagi } from "../../../store/state";
import styles from "./rabotyagi-table.module.scss";

function RabotyagiTable() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRabotyagi());
    }, [dispatch]);

    const list = useSelector((state) => state.data.rabotyagi);
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.id}>Имя</th>
                    <th className={styles.date}>Рейтинг</th>
                    <th className={styles.deadline}>Клиентов</th>
                    <th className={styles.user}>Дневников</th>
                    <th className={styles.remained}>Нагрузка, max</th>
                    <th className={styles.chars}>Теги</th>
                    <th className={styles.status}>Комментарий</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {list.map((item) => {
                    const comment = `${item.commet.slice(0, 70)}...`;
                    const tags = item.tags.join(", ");
                    return (
                        <tr className={styles.tr} key={`${item.id}${item.name}`}>
                            <td className={styles.id}>{item.name}</td>
                            <td className={styles.date}>{item.rating}</td>
                            <td className={styles.deadline}>{item.clients}</td>
                            <td className={styles.user}>{item.dairys}</td>
                            <td className={styles.remained}>{item.nagruzka}</td>
                            <td className={styles.chars}>{tags}</td>
                            <td className={styles.commet}>{comment}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default RabotyagiTable;
