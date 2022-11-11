import { HeaderProps } from "./Header.props";

import classNames from "classnames";
import styles from './Layout.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
		<header {...props}>
			Header
		</header>
	);
};
