import React, { FunctionComponent } from 'react';

// Contexts
import { useViewDetected } from '@Components/Utilities/ViewDetected';

// Styles
import styles from './Container.module.scss';

// Utilities
import classnames from 'classnames';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FunctionComponent<LayoutContainerProps> = ({
  className,
  children,
}) => {
  const { deviceType } = useViewDetected();

  return (
    <div
      className={classnames([styles.container, styles[deviceType], className])}>
      {children}
    </div>
  );
};

export default Container;
