import { FooterProps } from "./Footer.props";

import { Ptag } from "../../components";
import { format } from "date-fns";

import classNames from "classnames";
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
		<footer className={classNames(className, styles.footer)} {...props}>
			<Ptag type="medium" color="white">
				OwlTop © 2022 - {format(new Date(), 'yyyy')} Все права защищены
			</Ptag>
			<a href="#" target="_blank">Пользовательское соглашение</a>
			<a href="#" target="_blank">Политика конфиденциальности</a>
		</footer>
	);
};
