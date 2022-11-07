import { TagProps } from "./Tag.props";

import classNames from "classnames";
import styles from './Tag.module.css';

export const Tag = ({type, color = 'ghost', href, children, ...props}: TagProps): JSX.Element => {
	const isEquelRed   = color === 'red',
		isEquelGreen   = color === 'green',
		isEquelSmall   = type  === 'small',
		isEquelMedium  = type  === 'medium',
		isEquelGray    = color === 'gray',
		isEquelPrimary = color === 'primary',
		isEquelGhost   = color === 'ghost';

	return (
		<div {...props} className={classNames(styles.tag, {
			[styles.red]:      isEquelRed,
			[styles.green]:    isEquelGreen,
			[styles.gray]:     isEquelGray,
			[styles.small]:    isEquelSmall,
			[styles.medium]:   isEquelMedium,
			[styles.ghost]:    isEquelGhost,
			[styles.primary]:  isEquelPrimary
		})}>
			{
				href ? <a href={href}>{children}</a> : <>{children}</>
			}
		</div>
	);
};