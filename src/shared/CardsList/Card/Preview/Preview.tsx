import React from 'react';
import styles from './preview.css';

export function Preview() {
    return (
        <div className={styles.preview}>
            <img
                src="https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S"
                alt="..."
                className={styles.previewImg}
            />
        </div>
    );
}
