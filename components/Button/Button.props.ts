import React, {
    ReactNode
} from "react";

export interface BtnProps extends React.ComponentProps<'button'> {
    children: ReactNode;
    appearance: string;
    arrow?: string;
}