import React from 'react';
import styles from './HeaderTable.module.scss'

type HeaderTableProps = {
    title: string
}

const HeaderTable = (props: HeaderTableProps) => {
    return (
        <tr className={styles.row}>
            <td className={styles.command}>{props.title}</td>
            <td className={styles.info}>W</td>
            <td className={styles.info}>L</td>
            <td className={styles.info}>WP</td>
            <td className={styles.info}>PF</td>
            <td className={styles.info}>GB</td>
            <td className={styles.info}>OOP</td>
        </tr>
    );
};

export default HeaderTable;