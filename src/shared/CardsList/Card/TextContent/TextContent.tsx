import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <h2 className={styles.title}>
                <a
                    href="#post-url"
                    className={styles.postLink}
                >
                    Следует отметить, что новая модель фвцфвцвцфввцвцфвфцвццццццццццццццццццццццццццц
                </a>
            </h2>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                        alt="avatar"
                        className={styles.avatar}
                    />
                    <a
                        href="#user-url"
                        className={styles.username}
                    >
                        Дмитрий Грошин
                    </a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано </span>
                        4 часа назад
                    </span>
            </div>

        </div>
    );
}
