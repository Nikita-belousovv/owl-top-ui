import React from "react";

export interface RatingProps extends React.ComponentProps<'div'> {
    isEdit?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}