import React, { useContext } from "react";
import { useRouter } from "next/router";

import {
    FirstLevelMenuItem,
    MenuItem
} from "../../../interfaces/menu.interface";
import { ThirdLevel } from "../ThirdLevel";
import { MainComponentCxt } from "../../../context/app.xontext";

import styles from './secondlevel.module.css';
import cn from 'classnames';

interface IThirdLevel {
    menuSecond: FirstLevelMenuItem,
    isEmpty: string,
}

export const SecondLevel = ({ menuSecond, isEmpty }: IThirdLevel): JSX.Element => {

    const {
		menu,
        setMenu
	} = useContext(MainComponentCxt);

    const router = useRouter();

    const equalToCurrentRoute = (menuSecItem: MenuItem) => {
		if(menuSecItem.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
			return menuSecItem.isOpened = true;
		}
	};

    const openSecondLevel = (currentSecCategory: string) => {
		const isRightCurrentCategory = menu.map((menuItem): MenuItem => {
			if(menuItem._id.secondCategory === currentSecCategory) {
				menuItem.isOpened = !menuItem.isOpened;
			}

			return menuItem;
		});

		setMenu && setMenu(isRightCurrentCategory);
	};

    return (
        <div className={styles.secLevelBlock}>
            {menu.length ? menu.map(mnuSecItem => {
                equalToCurrentRoute(mnuSecItem);

                return (
                    <div key={mnuSecItem._id.secondCategory}>
                        <div
                            className={styles.secLevel}
                            onClick={() => openSecondLevel(mnuSecItem._id.secondCategory)}
                        >
                            {mnuSecItem._id.secondCategory}
                        </div>
                        <div className={cn(styles.secLevBlock, {
                            [styles.secLevBlockOpened]: mnuSecItem.isOpened
                        })}>
                            <ThirdLevel
                                pages={mnuSecItem.pages}
                                route={menuSecond.route}
                                isEmpty={isEmpty}
                            />
                        </div>
                    </div>
                );
            }) : <div>{isEmpty}</div>}
        </div>
    );
};