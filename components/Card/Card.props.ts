import React, {ReactNode } from "react";

export interface CardProps extends React.ComponentProps<'div'> {
    children: ReactNode;
    color?: string;
}