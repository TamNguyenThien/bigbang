import React, { FunctionComponent, useState } from 'react';

// Utilities
import classnames from 'classnames';
// import { getHttpErrorMessage } from '@Lib/api';

// Styles
import styles from './Button.module.scss';

// Contexts
// import { useAlertContext } from '@Components/Utilities/Alert';

interface ButtonProps {
    color?: string;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    secondary?: boolean;
    fullWidth?: boolean;
    onClick?: React.MouseEventHandler;
    type?: 'button' | 'submit' | 'reset';
    size?: 'compact' | 'small' | 'normal';
}

const Button: React.FC<ButtonProps & React.RefAttributes<HTMLButtonElement>> = React.memo(React.forwardRef(
    (props, ref) => {
        const className = classnames([
            styles.btn,
            props.className,
            {
                [styles.btn_full]: props.fullWidth,
                [styles.btn_loading]: props.loading,
            },
            styles[`btn_${props.size}`],
            styles[`btn_${props.color}`],
            styles[props.secondary ? `btn_secondary_${props.color.split('-')[0]}` : 'btn_primary'],
        ]);

        return (
            <button
                ref={ref}
                type={props.type}
                className={className}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.loading ? (
                    <img className={styles.loading} src={'/assets/button/spinner.png'} />
                ) : (
                    props.children
                )}
            </button>
        );
    },
));

Button.defaultProps = {
    className: '',
    type: 'button',
    size: 'normal',
    color: 'brand',
    loading: false,
    disabled: false,
    secondary: false,
    fullWidth: false,
    onClick: () => {},
};

export default Button;

interface AsyncButtonProps extends ButtonProps {
    onClick(event: React.MouseEvent<HTMLButtonElement>): Promise<any> | void;
}

export const AsyncButton: FunctionComponent<
    AsyncButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.memo(React.forwardRef(({ onClick, ...props }, ref) => {
    const [loading, setLoading] = useState(false);
    // const { error: alertError } = useAlertContext();

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        try {
            setLoading(true);

            await onClick(event);
        } catch (error) {
            // alertError(getHttpErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button ref={ref} {...props} onClick={handleClick} loading={loading}>
            {props.children}
        </Button>
    );
}));
