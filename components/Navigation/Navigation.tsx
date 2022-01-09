import React from 'react';
import styles from './Navigation.module.scss';
import Logo from '../../public/design-docs-logo.png';
import Image from 'next/image';

import { NavigationItem } from '../NavigationItem/NavigationItem';

interface INavigation {
    items?: {}
}

export const Navigation = (props: INavigation) => {
    return (
            <nav className={styles.navContainer}>
                <div className={styles.logo}>
                    <Image src={Logo} height={40} width={280} alt="design docs logo"/>
                </div>
                    <NavigationItem linkTitle='Home' linkTo='/' icon='home-2' color='#4B5459' />
                    <NavigationItem linkTitle='Cores' linkTo='/colors' icon='contrast-drop' color='#4B5459' />
                    {/* <NavigationItem /> */}
            </nav>
    )
}