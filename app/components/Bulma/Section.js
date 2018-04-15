import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = (props) => {
  const {
    children,
    hasTextCentered,
    isFluid,
    isFullHD,
    isFullWidth,
  } = props;

  const className = classNames('section', {
    'has-text-centered': hasTextCentered,
    'is-fluid': isFluid,
    'is-fullhd': isFullHD,
    'is-fullwidth': isFullWidth,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  hasTextCentered: PropTypes.bool,
  isFluid: PropTypes.bool,
  isFullHD: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

export default Section;
