import { sortEnum } from "../../components/Sort/Sort.props";
import { ProductModel } from "../../interfaces/product.interface";

type TRatingPrice = sortEnum.Price | sortEnum.Rating;

export type SortActions = {
    type: TRatingPrice
};

export interface SortReducerState {
    sort: sortEnum,
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch(action.type) {
        case sortEnum.Rating:
            return {
                sort: sortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case sortEnum.Price:
            return {
                sort: sortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        default:
            throw new Error('Неверный тип сортировки');
    }
};