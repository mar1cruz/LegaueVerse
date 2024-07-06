import {Fragment} from "react";
import styles from "./TeamName.module.scss";

type Props = {
    name: string;
    className?: string;
};

const TeamName = ({name, className}: Props) => {
    return (
        <>
            {name?.split(" ").map((n, i) => (
                <Fragment key={i}>
                    <span className={className && styles[className] + ` ${styles.title}`}>{n}</span>
                </Fragment>
            ))}
        </>
    );
};

export default TeamName;
