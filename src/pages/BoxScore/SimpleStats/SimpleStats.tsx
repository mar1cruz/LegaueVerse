import styles from './SimpleStats.module.scss';

type Props = {
    valueVisitors: number | string | number[],
    valueHome: number | string | number[],
    name: string
};

export const SimpleStats = ({valueVisitors, valueHome, name}: Props) => (
    <>
        <span className={styles.field__value}>{Array.isArray(valueVisitors) ? valueVisitors.join('/') : valueVisitors}</span>
        <p style={{color: "#757575", fontSize: '11px', fontWeight: 500}}>{name}</p>
        <span className={styles.field__value}>{Array.isArray(valueHome) ? valueHome.join('/') : valueHome}</span>
    </>
);
