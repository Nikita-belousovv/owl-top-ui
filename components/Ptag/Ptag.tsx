import { PtagProps } from "./Ptag.props";

import classNames from "classnames";
import styles from './Ptag.module.css';

export const Ptag = ({type, color, children, ...props}: PtagProps): JSX.Element => {
	const isEqualsWhite = color === 'white';

    switch (type) {
		case 'small':
			return <p {...props} className={classNames(styles.small, {
				[styles.white]: isEqualsWhite
			})}>{children}</p>;
		case 'medium':
			return <p {...props} className={classNames(styles.medium, {
				[styles.white]: isEqualsWhite
			})}>{children}</p>;
		case 'large':
			return <p {...props} className={classNames(styles.large, {
				[styles.white]: isEqualsWhite
			})}>{children}</p>;
		default:
			return <></>;
	}
};
