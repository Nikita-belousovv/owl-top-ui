import { useContext } from 'react';

import { MainComponentCxt } from '../../context/app.xontext';
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
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

	const buildLevelMenu = (): JSX.Element => (
		<>
			{firstLevelMenu.map(firstLvlItem => 
				<div key={firstLvlItem.route}>
					<a href={`/${firstLvlItem.route}`}>
						<div className={cn(styles.firstLevel, {
							[styles.FLActive]: firstLvlItem.id === firstCategory
						})}>
							{firstLvlItem.icon}
							<span>{firstLvlItem.name}</span>
						</div>
					</a>
					<>{firstLvlItem.id === firstCategory && buildSecondLevel(firstLvlItem)}</>
				</div>
			)}
		</>
	);

	const buildSecondLevel = (menuSecond: FirstLevelMenuItem): JSX.Element => (
		<div className={styles.secLevelBlock}>
			{menu.map(mnuSecItem => <div key={mnuSecItem._id.secondCategory}>
				<div className={cn({
					[styles.secLevBlockOpened]: mnuSecItem.isOpened
				})}>
					<div className={styles.secLevel}>
						{mnuSecItem._id.secondCategory}
					</div>
					{buildThirdLevel(mnuSecItem.pages, menuSecond.route)}
				</div>
			</div>)}
		</div>
	);

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => 
		(pages.map(page => <a key={page.alias} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
			[styles.activeThLevel]: false
		})}>
			{page.category}
		</a>)
	);

    return (
		<div className={styles.wrapMenu}>
			{buildLevelMenu()}
		</div>
	);
};
