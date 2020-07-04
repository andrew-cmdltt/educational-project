import React from 'react';
import styles from './card.css';
import {Preview} from "./Preview";
import {TextContent} from "./TextContent";
import {Controls} from "./Controls";

export function Card() {
    return (
        <li className={styles.card}>
            <Preview/>
            <TextContent/>
            <Controls/>
        </li>
    );
}
