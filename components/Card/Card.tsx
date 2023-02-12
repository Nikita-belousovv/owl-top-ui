import { CardProps } from "./Card.props";

import classNames from "classnames";
import styles from './Card.module.css';

export const Card = ({ color = "white", children, className, ...props }: CardProps): JSX.Element => {
	const isColorBlue = color === 'blue';

	return (
		<div 
			className={classNames(styles.card, className, {
				[styles.blue]: isColorBlue
			})} {...props}
		>
			{children}
		</div>
	);
};
