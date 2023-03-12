import React from "react";

import { Button } from "../../Button/Button";

import styles from './Actions.module.css';

export const Actions = (): JSX.Element => (
    <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">Читать отзывы</Button>
    </div>
);