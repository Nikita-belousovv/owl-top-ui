import { PDivider } from "./Divider.props";

import cn from "classnames";
import styles from './Divider.module.css';

export const Divider = ({ className, ...props }: PDivider): JSX.Element => (
	<hr className={cn(className, styles.hr)} {...props} />
);
