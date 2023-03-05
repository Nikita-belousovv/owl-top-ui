import { useReducer } from "react";

import {
    Htag,
    Tag,
    HhData,
    Advantages,
    Sort
} from "../../components";
import { sortEnum } from "../../components/Sort/Sort.props";
import { ITopPageProps } from "./TopPageComponent.props";

import { sortReducer } from "./sort.reducer";

import { TopLevelCategory } from "../../interfaces/page.interface";

import styles from "./TopPageComponent.module.css";


export const TopPageComponent = ({page, products, firstCategory}: ITopPageProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {products, sort: sortEnum.Rating });
    const setSort = (sort: sortEnum) => {
        dispatchSort({type: sort});
    };

    const isRightFirstCategory = firstCategory === TopLevelCategory.Courses && page.hh;
    const isAdvantages = page.advantages && page.advantages.length > 0;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}> 
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag type="medium" color="grey">{products.length}</Tag>}
                <Sort setSort={setSort} sort={sort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map((productItem) => {
                    return <div key={productItem._id}>{productItem.title}</div>;
                })}
            </div>
            <div className={styles.vacancies}> 
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                {page.category && <Tag type="medium" color="red">hh.ru</Tag>}
            </div>
            {isRightFirstCategory && <HhData
                juniorSalary={page.hh?.juniorSalary}
                middleSalary={page.hh?.middleSalary}
                seniorSalary={page.hh?.seniorSalary}
                count={page.hh?.count}
            />}
            {
                isAdvantages && <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            }
            <div className={styles.seoTxtWrap}>
                {page.seoText && <div className={styles.seoTxt} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            </div>
            <Htag tag="h2">Получаемые навыки</Htag>
            <div className={styles.skillTags}>
                {page.tags.map(tag => <Tag type="small" color="primary" key={tag}>{tag}</Tag>)}
            </div>
        </div>
    );
};
