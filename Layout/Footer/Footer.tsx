import { FooterProps } from "./Footer.props";

import classNames from "classnames";
import styles from './Layout.module.css';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
		<div {...props}>
			Footer
		</div>
	);
};
