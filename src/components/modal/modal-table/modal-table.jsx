import React from "react";
import { useSelector } from "react-redux";
import styles from "./modal-table.module.scss";

function ModalTable() {
    const list = useSelector((state) => state.data.rabotyagi) || [];
    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.id}>Имя</th>
                        <th className={styles.date}>Рейтинг</th>
                        <th className={styles.user}>Дневников</th>
                        <th className={styles.remained}>Нагрузка, max</th>
                        <th className={styles.chars}>Теги</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {list.map((item, index) => {
                        if (index > 6) return null;
                        const tags = item.tags.join(", ");
                        return (
                            <tr className={styles.tr} key={`${item.id}${item.name}`}>
                                <td className={styles.id}>{item.name}</td>
                                <td className={styles.date}>{item.rating}</td>
                                <td className={styles.user}>{item.dairys}</td>
                                <td className={styles.remained}>{item.nagruzka}</td>
                                <td className={styles.chars}>{tags}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ModalTable;
