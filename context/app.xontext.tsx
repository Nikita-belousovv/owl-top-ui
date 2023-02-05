import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IAppContext {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    setMenu?: (newMenu: MenuItem[]) => void
}

type TChildren = PropsWithChildren<IAppContext>;

const defaultValues = {
    menu: [],
    firstCategory: TopLevelCategory.Courses
};

export const MainComponentCxt = createContext<IAppContext>(defaultValues);

export const AppContextProvider = ({ menu, firstCategory, children }: TChildren): JSX.Element => {

    const [menuState, setMenuState] = useState<MenuItem[]>(menu);

    const setMenu = (newMenu: MenuItem[]) => setMenuState(newMenu);

    const stateValues = {
        menu: menuState,
        firstCategory,
        setMenu
    };

    useEffect(() => {
        setMenu(menu);
    }, [menu.length]);

    return (
        <MainComponentCxt.Provider value={stateValues}>
            {children}
        </MainComponentCxt.Provider>
    );
};