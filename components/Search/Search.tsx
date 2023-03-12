import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

import { SearchProps } from "./Search.props";

import { Button } from "../Button/Button";
import SearchIcon from './SearchIcon.svg';

import cn from "classnames";
import styles from "./Search.module.css";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	type TChangeEvent =  ChangeEvent<HTMLInputElement>;
	type TKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (event: TKeyboardEvent) => {
		if(event.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.searchWrap)}>
			<input
				onChange={(event: TChangeEvent) => setSearch(event.target.value)}
				onKeyDown={handleKeyDown}
				value={search}
				className={cn(className, styles.search)}
				type="text"
				{...props}
			/>
			<Button onClick={goToSearch} className={styles.searchBtn} appearance='primary'>
				<SearchIcon />
			</Button>
		</div>
	);
};
