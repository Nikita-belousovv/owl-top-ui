import { SidebarProps } from "./Sidebar.props";

import { Menu } from "../Menu/Menu";

import classNames from "classnames";
import styles from './Layout.module.css';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
		<aside {...props}>
			<Menu/>
		</aside>
	);
};
