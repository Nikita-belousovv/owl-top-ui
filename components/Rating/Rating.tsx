import React, { useState, useEffect, KeyboardEvent } from "react";

import StarIcon from './star.svg';

import { RatingProps } from "./Rating.props";

import classNames from "classnames";
import styles from './Rating.module.css';

export const Rating = ({isEdit = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const changeDispaly = (i: number) => {
		if (!isEdit) return;
		
		constructRating(i);
	};

	const addRating = (i: number) => {
		if (!isEdit || !setRating) return;

		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<HTMLSpanElement>) => {
		if(e.code !== 'Space' || !setRating) return;

		setRating(i);
	};

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={classNames(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEdit
					})}
					onMouseEnter={() => changeDispaly(i + 1)}
					onMouseLeave={() => changeDispaly(rating)}
					onClick={() => addRating(i + 1)}
					tabIndex={isEdit ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => isEdit && handleSpace(i + 1, e)}
				>
					<StarIcon />
				</span>
			);
		});

		setRatingArray(updatedArray);
	};

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

    return (
		<div {...props}>
			{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
		</div>
	);
};
