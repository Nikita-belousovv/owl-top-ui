import { ProductProps } from "./Product.props";

import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { priceRu } from "../../helpers";
import { Divider } from "../Divider/Divider";
import { AdvantagesDisAdvantages } from "./AdvantagesDisAdvantages/AdvantagesDisAdvantages";
import { Actions } from "./Actions/Actions";
import { Categories } from "./Categories/Categories";

import cn from "classnames";
import styles from './Product.module.css';

export const Product = ({ product, className, ...props}: ProductProps): JSX.Element => {
	const currentPrice  = priceRu(product.price);
	const currentCredit = priceRu(product.credit);
	const oldPrice      = priceRu(product.price - product.oldPrice);
	
	return (
		<Card className={cn(styles.productWrap, className)} {...props}>
			<div className={styles.logo}>
				<img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{currentPrice}
				{product.oldPrice && <Tag className={styles.oldPrice} type="small" color="green">{oldPrice}</Tag>}
			</div>
			<div className={styles.credit}>{currentCredit}/<span className={styles.month}>мес</span></div>
			<div className={styles.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<Categories categories={product.categories}/>
			<div className={styles.priceTitle}>Цена</div>
			<div className={styles.creditTitle}>Кредит</div>
			<div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
			<Divider className={styles.hr} />
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>фичи</div>
			<AdvantagesDisAdvantages currentProduct={product}/>
			<Divider className={styles.hr} />
			<Actions />
		</Card>
	);
};
