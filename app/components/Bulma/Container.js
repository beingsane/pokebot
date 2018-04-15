import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = (props) => {
  const {
    children,
    hasTextCentered,
    isFluid,
    isFullHD,
    isFullHeight,
    isFullWidth,
  } = props;

  const className = classNames('container', {
    'has-text-centered': hasTextCentered,
    'is-fluid': isFluid,
    'is-fullhd': isFullHD,
    'is-fullwidth': isFullWidth,
  });

  const style = {
    height: isFullHeight && '100%',
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  hasTextCentered: PropTypes.bool,
  isFluid: PropTypes.bool,
  isFullHD: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

export default Container;
