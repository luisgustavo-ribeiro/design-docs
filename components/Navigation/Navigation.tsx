import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import Image from 'next/image';

interface INavigation {
    items?: {}
}

export const Navigation = (props: INavigation) => {
    return (
            <nav className={styles.navContainer}>
                <div className={styles.logo}>
                    <Image src='/../public/design-docs-logo.png' height={40} width={280} alt="design docs logo"/>
                </div>
                    <NavigationItem linkTitle='Home' linkTo='/' icon='Home' color='#4B5459' iconSize={16} />
                    <NavigationItem linkTitle='Home' linkTo='/' icon='Home' color='#4B5459' iconSize={16} />
                    <NavigationItem linkTitle='Home' linkTo='/' icon='Home' color='#4B5459' iconSize={16} />
                    {/* <NavigationItem /> */}
            </nav>
    )
}