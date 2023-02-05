import { useContext } from 'react';

import { MainComponentCxt } from '../../context/app.xontext';
import { MainLevelMenu } from "./MainLevelMenu";

export const Menu = (): JSX.Element => {

	const {
		firstCategory
	} = useContext(MainComponentCxt);
	const isEmpty = 'ПУСТО';

    return (
		<MainLevelMenu
			isEmpty={isEmpty}
			firstCategory={firstCategory}
		/>
	);
};
