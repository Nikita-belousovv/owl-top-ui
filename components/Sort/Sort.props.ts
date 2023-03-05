import React from "react";

export interface SortProps extends React.ComponentProps<'div'> {
    sort: sortEnum,
    setSort: (sort: sortEnum) => void
}

export enum sortEnum {
    Rating,
    Price
}