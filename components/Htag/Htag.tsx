import { HtagProps } from "./Htag.props";

import classNames from "classnames";
import styles from './Htag.module.css';

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={classNames(styles.h1)}>{children}</h1>;
		case 'h2':
			return <h2 className={classNames(styles.h2)}>{children}</h2>;
		case 'h3':
			return <h3 className={classNames(styles.h3)}>{children}</h3>;
		default:
			return <></>;
	}
};