import React, {ReactNode } from "react";

export interface PtagProps extends React.ComponentProps<'p'> {
    children: ReactNode;
    type: string;
}