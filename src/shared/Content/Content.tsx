import React from 'react';
import styles from './Content.css';
interface ILayoutProps {
    children?: React.ReactNode;
}
interface IContentProps {
    children?: React.ReactNode;
}
export function Content({children}: IContentProps) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    );
}
