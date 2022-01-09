import React from "react";
import styles from "./ContentHeader.module.scss";

interface IContentHeader {
    title: string;
    subtitle: string;
}

export const ContentHeader = (props: IContentHeader) => {
    return (
        <div className={styles.contentHeader}>
            <h3 className={styles.title}>{ props.title }</h3>
            <span className={styles.subtitle}>{ props.subtitle }</span>
        </div>
    )
}