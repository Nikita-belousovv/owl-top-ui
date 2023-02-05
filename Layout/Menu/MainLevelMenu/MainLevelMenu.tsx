import Link from 'next/link';

import { firstLevelMenu } from "../../../helpers";
import { SecondLevel } from "../SecondLevel";

import styles from './mainlevelmenu.module.css';
import cn from 'classnames';

interface IbuildLevelMenu {
    isEmpty: string,
    firstCategory: number
}

export const MainLevelMenu = ({ isEmpty, firstCategory }: IbuildLevelMenu): JSX.Element => (
    <>
        {firstLevelMenu.length ? firstLevelMenu.map(firstLvlItem => 
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
                <>
                    {firstLvlItem.id === firstCategory && 
                        <SecondLevel
                            menuSecond={firstLvlItem}
                            isEmpty={isEmpty}
                        /> 
                    }
                </>
            </div>
        ): <div>{isEmpty}</div>}
    </>
);