import { Htag } from "../../Htag/Htag";
import CheckCircle from "./check_circle.svg";

import { TopPageAdvantage } from "../../../interfaces/page.interface";

import styles from './AdvantagesItem.module.css';

interface IAdvantagesItem {
    advantItem: TopPageAdvantage;
}

export const AdvantagesItem = ({ advantItem }: IAdvantagesItem): JSX.Element => (
    <div key={advantItem._id} className={styles.advantageWrap}>
        <div className={styles.titleWrap}>
            <CheckCircle />
            <Htag tag="h3">{advantItem.title}</Htag>
        </div>
        <div className={styles.description}>{advantItem.description}</div>
    </div>
);
