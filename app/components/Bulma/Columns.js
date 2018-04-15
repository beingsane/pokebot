import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Columns = (props) => {
  const {
    children,
    isFullHeight,
    isGapless,
    isMobile,
    isMultiline,
    isWrapper,
  } = props;

  const className = classNames('columns', {
    'is-gapless': isGapless,
    'is-mobile': isMobile,
    'is-multiline': isMultiline,
    'is-wrapper': isWrapper,
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

Columns.propTypes = {
  children: PropTypes.any,
  isFullHeight: PropTypes.bool,
  isGapless: PropTypes.bool,
  isMobile: PropTypes.bool,
  isMultiline: PropTypes.bool,
  isWrapper: PropTypes.bool,
};

export default Columns;
