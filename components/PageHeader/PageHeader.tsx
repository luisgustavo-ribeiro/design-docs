import React from "react";
import styles from "./PageHeader.module.scss"


interface IPageHeader {
    title: string;
    subtitle: string;
}

const PageHeader = (props: IPageHeader) => {
    return (
        <div className={styles.pageHeader}>

        </div>
    )
}