import React from "react";

import styles from './AdvantagesDisAdvantages.module.css';
import { ProductModel } from "../../../interfaces/product.interface";

interface IAdvantagesDisAdvantages {
    currentProduct: ProductModel;
}

export const AdvantagesDisAdvantages = ({ currentProduct }: IAdvantagesDisAdvantages): JSX.Element => (
    <div className={styles.advBlock}>
        {currentProduct.advantages && 
            <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{currentProduct.advantages}</div>
            </div>}
        {currentProduct.disadvantages && 
            <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{currentProduct.disadvantages}</div>
            </div>
        }
    </div>
);