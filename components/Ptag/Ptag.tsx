import { PtagProps } from "./Ptag.props";

import classNames from "classnames";
import styles from './Ptag.module.css';

export const Ptag = ({type, children, ...props}: PtagProps): JSX.Element => {
    switch (type) {
		case 'small':
			return <p {...props} className={classNames(styles.small)}>{children}</p>;
		case 'medium':
			return <p {...props} className={classNames(styles.medium)}>{children}</p>;
		case 'large':
			return <p {...props} className={classNames(styles.large)}>{children}</p>;
		default:
			return <></>;
	}
};
