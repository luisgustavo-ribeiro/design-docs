import React from 'react';
import styles from './NavigationItem.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";

interface INavigationItem {
	linkTitle: string;
	linkTo: string;
	color?: string;
    iconColor?: string;
	icon?: string;
	hasChildren?: boolean;
	children?: {};
}

export const NavigationItem = (props: INavigationItem) => {

    const router = useRouter();

	return (
		<div className={`${styles.navItem} ${router.pathname === `${props.linkTo}` ? styles.active : ""}`} >
			{props.icon ? (
                    <Link href={`${props.linkTo}`}>
                        <a>
                            <div className={styles.iconContainer}>
                                <i className={`ri-${props.icon.toLowerCase()}-line`}></i>
                            </div>
                            <span>{props.linkTitle}</span>
                        </a>
                    </Link>
                ) : (
                    <Link href={`${props.linkTo}`}>
                        <a>
                            <span>{props.linkTitle}</span>
                        </a>
                    </Link>
                )}
		</div>
	);
};
