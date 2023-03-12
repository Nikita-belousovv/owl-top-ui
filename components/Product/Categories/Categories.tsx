import React from "react";

import { Tag } from "../../Tag/Tag";

import styles from './Categories.module.css';

interface ICategories {
    categories: string[];
}

export const Categories = ({ categories }: ICategories): JSX.Element => (
    <div className={styles.tags}>
        {categories.map((categoryItem) => (
            <Tag
                className={styles.category}
                key={categoryItem}
                type="medium"
            >
                {categoryItem}
            </Tag>
        ))}
    </div>
);