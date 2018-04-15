import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = (props) => {
  const {
    children,
    isSmall,
    isMedium,
    isLarge,
  } = props;

  const className = classNames('content', {
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.any,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default Content;
