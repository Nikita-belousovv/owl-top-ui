import { SidebarProps } from "./Sidebar.props";

import { Menu } from "../Menu/Menu";
import { Search } from "../../components";
import Logo from "../Logotype.svg";

import cn from "classnames";
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
		<aside className={cn(className, styles.sidebar)} {...props}>
			<Logo className={cn(styles.logotype)} />
			<div className={cn(styles.search)}>
				<Search placeholder="Поиск.."/>
			</div>
			<Menu />
		</aside>
	);
};
