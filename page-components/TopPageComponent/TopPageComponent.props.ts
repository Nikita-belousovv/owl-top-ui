import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface ITopPageProps {
	firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}