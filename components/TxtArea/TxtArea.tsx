import { InputProps } from "./TxtArea.props";

import cn from "classnames";
import styles from "./TxtArea.module.css";

export const TxtArea = ({className, ...props}: InputProps): JSX.Element => {
	return (
		<textarea className={cn(className, styles.txtArea)} {...props}/>
	);
};
