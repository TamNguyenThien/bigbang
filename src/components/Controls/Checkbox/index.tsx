import React, { FunctionComponent, RefAttributes } from 'react';

// Utilities
import classnames from 'classnames';

// Styles
import styles from './Checkbox.module.scss';

interface CheckboxProps {
    name?: string;
    onChange?: any;
    value?: string;
    checked?: boolean;
    className?: string;
    disabled?: boolean;
}

const Checkbox: FunctionComponent<
    CheckboxProps & RefAttributes<HTMLInputElement>
> = React.forwardRef((props, ref) => {
    const className = classnames([styles.checkbox, props.className]);

    return (
        <input
            ref={ref}
            name={props.name}
            type={'checkbox'}
            value={props?.value}
            className={className}
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.disabled}
        />
    );
});

Checkbox.defaultProps = {
    name: '',
    className: '',
    checked: false,
    disabled: false,
    onChange: () => null,
};

export default Checkbox;
