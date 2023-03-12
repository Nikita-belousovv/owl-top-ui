import React from "react";

import { TopLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

import LessonIcon from './Icons/lesson.svg';
import BookIcon   from './Icons/book.svg';
import CloudIcon  from './Icons/cloud.svg';
import BoxIcon    from './Icons/box.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price?: number) => {
	const conversionPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

	return conversionPrice;
};