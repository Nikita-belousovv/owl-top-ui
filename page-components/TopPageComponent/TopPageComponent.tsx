import { Htag, Tag, HhData } from "../../components";
import { ITopPageProps } from "./TopPageComponent.props";

import { TopLevelCategory } from "../../interfaces/page.interface";

import styles from "./TopPageComponent.module.css";

export const TopPageComponent = ({page, products, firstCategory}: ITopPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}> 
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag type="medium" color="grey">{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map((productItem) => {
                    return <div key={productItem._id}>{productItem.title}</div>;
                })}
            </div>
            <div className={styles.vacancies}> 
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                {page.category && <Tag type="medium" color="red">hh.ru</Tag>}
            </div>
            {firstCategory === TopLevelCategory.Courses && <HhData
                juniorSalary={page.hh?.juniorSalary}
                middleSalary={page.hh?.middleSalary}
                seniorSalary={page.hh?.seniorSalary}
                count={page.hh?.count}
            />}
        </div>
    );
};
