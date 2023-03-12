import React from "react";

import { ICharacteristicCourse } from "../../../interfaces/product.interface";

import styles from './Characteristic.module.css';

interface ICharacteristic {
    characteristic: ICharacteristicCourse[];
}

export const Characteristic = ({ characteristic }: ICharacteristic) => (
    <div className={styles.feature}>
        {characteristic.map((c) => (
            <div className={styles.characteristics} key={c.name}>
                <span className={styles.characteristicsName}>{c.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
        ))}
    </div>
);