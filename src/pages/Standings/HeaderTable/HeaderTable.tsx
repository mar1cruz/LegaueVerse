import React from 'react';
import styles from './HeaderTable.module.scss'

type Props = {
    header: string[] | undefined
}

export const HeaderTable = ({header}: Props) => {
    return (
        <thead>
        <tr className={styles.row}>
            <td className={styles.command}>Team name</td>
            {header?.map((item, index) => <td className={styles.info} key={index}>{item}</td>)}
        </tr>
        </thead>
    );
};

