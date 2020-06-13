import React from 'react';
import styles from './Header.css';
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {ThreadTitle} from "./ThreadTitle/ThreadTitle";
import {SortBlock} from "./SortBlock/SortBlock";

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
