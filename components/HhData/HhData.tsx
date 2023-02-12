import { HhDataProps } from "./HhData.props";

import { Card } from "../Card/Card";
import { CompetenciesSalaries } from "./CompetenciesSalaries/CompetenciesSalaries";
import IconRate from './rate.svg';

import classNames from "classnames";
import styles from './HhData.module.css';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {

	const arrayCompetenciesSalaries = [
		{	
			id: 1,
			title: 'Начальный',
			salary: juniorSalary,
			count,
			icon: 
				<>
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
					<IconRate className={classNames(styles.iconRate)} />
					<IconRate className={classNames(styles.iconRate)} />
				</>
		},
		{
			id: 2,
			title: 'Средний',
			salary: middleSalary,
			count,
			icon: 
				<>
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
					<IconRate className={classNames(styles.iconRate)}/>
				</>
		},
		{
			id: 3,
			title: 'Профессионал',
			salary: seniorSalary,
			count,
			icon: 
				<>
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
					<IconRate className={classNames(styles.iconRate, styles.filled)} />
				</>
		}
	];
	
	return (
		<div className={styles.vacancies}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				{arrayCompetenciesSalaries.map(item => (
					<CompetenciesSalaries key={item.id} itemCategory={item} />
				))}
			</Card>
		</div>
	);
};
