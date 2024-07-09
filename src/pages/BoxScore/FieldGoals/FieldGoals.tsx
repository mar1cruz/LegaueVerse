import styles from './FieldGoals.module.scss'

type Props = {
    valueVisitors: number[],
    valueHome: number[],
    name: string
}

export const FieldGoals = ({valueVisitors, valueHome, name}: Props) => (
    <>
        <p className={styles.field__goals}>
            <span className={styles.stats__points}>{valueVisitors[0]}/{valueVisitors[1]}</span>
            <span className={styles.field__percentage}>{valueVisitors[2]}%</span>
        </p>
        <p className={styles.field__name} >{name}</p>
        <p className={styles.field__goals}>
            <span className={styles.stats__points}>{valueHome[0]}/{valueHome[1]}</span>
            <span className={styles.field__percentage}
                  style={{textAlign: 'right'}}>{valueHome[2]}%</span>
        </p>
    </>
);