import { SidebarProps } from "./Sidebar.props";

import classNames from "classnames";
import styles from './Layout.module.css';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
		<div {...props}>
			Sidebar
		</div>
	);
};
