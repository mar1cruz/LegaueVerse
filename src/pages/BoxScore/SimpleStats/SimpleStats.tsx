import styles from './SimpleStats.module.scss';

type Props = {
    valueVisitors: number | string | number[],
    valueHome: number | string | number[],
    name: string
};

export const SimpleStats = ({valueVisitors, valueHome, name}: Props) => (
    <>
        <span className={styles.field__value}>{Array.isArray(valueVisitors) ? valueVisitors.join('/') : valueVisitors}</span>
        <p className={styles.field__name}>{name}</p>
        <span className={styles.field__value}>{Array.isArray(valueHome) ? valueHome.join('/') : valueHome}</span>
    </>
);
