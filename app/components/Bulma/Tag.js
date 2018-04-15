import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = (props) => {
  const {
    children,
    isBlack,
    isDark,
    isLight,
    isWhite,
    isPrimary,
    isLink,
    isInfo,
    isSuccess,
    isWarning,
    isDanger,
    isMedium,
    isLarge,
  } = props;

  const className = classNames('tag', {
    'is-black': isBlack,
    'is-dark': isDark,
    'is-light': isLight,
    'is-white': isWhite,
    'is-primary': isPrimary,
    'is-link': isLink,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger,
    'is-medium': isMedium,
    'is-large': isLarge,
  });

  return (
    <span className={className}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.any,
  isBlack: PropTypes.bool,
  isDark: PropTypes.bool,
  isLight: PropTypes.bool,
  isWhite: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isLink: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default Tag;
