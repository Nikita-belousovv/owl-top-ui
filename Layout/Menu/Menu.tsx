import { useContext } from 'react';

import Link from 'next/link';
import { useRouter } from "next/router";

import { MainComponentCxt } from '../../context/app.xontext';
import { FirstLevelMenuItem, MenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";

import LessonIcon from './Icons/lesson.svg';
import BookIcon   from './Icons/book.svg';
import CloudIcon  from './Icons/cloud.svg';
import BoxIcon    from './Icons/box.svg';

import styles from './menu.module.css';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <LessonIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <CloudIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BookIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'Products',
		name: 'Товары',
		icon: <BoxIcon />,
		id: TopLevelCategory.Products
	}
];

export const Menu = (): JSX.Element => {

	const {
		menu,
		setMenu,
		firstCategory
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
			} else {
				menuItem.isOpened = false;
			}

			return menuItem;
		});

		setMenu && setMenu(isRightCurrentCategory);
	};

	const buildLevelMenu = (): JSX.Element => (
		<>
			{firstLevelMenu.map(firstLvlItem => 
				<div key={firstLvlItem.route}>
					<Link href={`/${firstLvlItem.route}`}>
						<a>
							<div className={cn(styles.firstLevel, {
								[styles.FLActive]: firstLvlItem.id === firstCategory
							})}>
								{firstLvlItem.icon}
								<span>{firstLvlItem.name}</span>
							</div>
						</a>
					</Link>
					<>{firstLvlItem.id === firstCategory && buildSecondLevel(firstLvlItem)}</>
				</div>
			)}
		</>
	);

	const buildSecondLevel = (menuSecond: FirstLevelMenuItem): JSX.Element => (
		<div className={styles.secLevelBlock}>
			{menu.map(mnuSecItem => {
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
							{buildThirdLevel(mnuSecItem.pages, menuSecond.route)}
						</div>
					</div>
				);
			})}
		</div>
	);

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => 
		(pages.map(page => 
			<Link key={page.alias} href={`/${route}/${page.alias}`}>
				<a className={cn(styles.thirdLevel, {
					[styles.activeThLevel]: `/${route}/${page.alias}` === router.asPath
				})}>
					{page.category}
				</a>
			</Link>)
	);

    return (
		<div className={styles.wrapMenu}>
			{buildLevelMenu()}
		</div>
	);
};
