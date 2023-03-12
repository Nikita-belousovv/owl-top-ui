import React from "react";
import { priceRu } from "../../../helpers";

import { ItemCategoryCard } from "../../../interfaces/page.interface";

import styles from './CompetenciesSalaries.module.css';

interface ICompetenciesSalaries {
    itemCategory: ItemCategoryCard;
}

export const CompetenciesSalaries = ({ itemCategory }: ICompetenciesSalaries): JSX.Element => {
    const money = priceRu(itemCategory.salary);

    return (
        <div className={styles.salaryItem} key={itemCategory.id}>
            <div className={styles.title}>{itemCategory.title}</div>
            <div className={styles.salaryValue}>{money}</div>
            <div className={styles.rate}>
                {itemCategory.icon}
            </div>
        </div>
    );
};