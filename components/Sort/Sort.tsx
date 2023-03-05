import { SortProps, sortEnum } from "./Sort.props";

import SortIcon from './Sort.svg';

import cn from "classnames";
import styles from './Sort.module.css';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	const isRating = sort === sortEnum.Rating;
	const isPrice  = sort === sortEnum.Price;

	return (
		<div className={cn(className)} {...props}>
			<span
				onClick={() => setSort(sortEnum.Rating)}
				className={cn(styles.iconWrap, {
					[styles.active]: isRating
				})}
			>
				{isRating && <SortIcon className={styles.icon} />} По рейтингу
			</span>

			<span
				onClick={() => setSort(sortEnum.Price)}
				className={cn(styles.iconWrap, {
					[styles.active]: isPrice
				})}
			>
				{isPrice && <SortIcon className={styles.icon} />} По цене
			</span>
		</div>
	);
};
