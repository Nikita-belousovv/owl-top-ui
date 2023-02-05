import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { PageItem } from "../../../interfaces/menu.interface";

import styles from './thirdlevel.module.css';
import cn from 'classnames';

interface IThirdLevel {
    pages: PageItem[],
    route: string,
    isEmpty: string
}

export const ThirdLevel = ({ pages, route, isEmpty }: IThirdLevel): JSX.Element => {
    const router = useRouter();

    return (
        <>
            {pages.length ? pages.map(page => 
            <Link key={page.alias} href={`/${route}/${page.alias}`}>
                <a className={cn(styles.thirdLevel, {
                    [styles.activeThLevel]: `/${route}/${page.alias}` === router.asPath
                })}>
                    {page.category}
                </a>
            </Link>) : <div>{isEmpty}</div>}
        </>
    );
};