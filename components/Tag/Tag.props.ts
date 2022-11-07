import React, { ReactNode } from "react";

export interface TagProps extends React.ComponentProps<'div'> {
    type: string;
    children: ReactNode;
    color?: string;
    href?: string;
}