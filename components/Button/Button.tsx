import { BtnProps } from "./Button.props";

import classNames from "classnames";
import styles from "./Button.module.css";

import ArrowIcon from './arrow.svg';

export const Button = ({appearance, children, className, arrow = 'none', ...props}: BtnProps): JSX.Element => {
    const isEqualsPrimary: boolean = appearance === 'primary',
        isEqualsGhost:     boolean = appearance === 'ghost',
        isNotEqualNoneArr: boolean = arrow      !== 'none',
        isEqualDownArr:    boolean = arrow      === 'down';

    return (
        <button
            className={classNames(styles.button, className, {
                [styles.primary]: isEqualsPrimary,
                [styles.ghost]: isEqualsGhost
            })}
            {...props}
        >
            {children}

            {isNotEqualNoneArr && (
                <span className={classNames(styles.arrow, {
                    [styles.down]: isEqualDownArr
                })}>
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
