import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = (props) => {
  const {
    children,
    customClass,
    isHiddenTouch,
    isNarrow,
    offset,
    span,
    width,
  } = props;

  const hasOffset = !isNaN(offset);
  const hasSpan = !isNaN(span);
  const hasWidth = !isNaN(width);

  const defaultClass = customClass ? `column ${customClass}` : 'column';

  const className = classNames(defaultClass, {
    'is-hidden-touch': isHiddenTouch,
    'is-narrow': isNarrow,
    [`is-offset-${offset}`]: hasOffset && offset,
    [`is-${span}`]: hasSpan && span,
  });

  const style = {
    width: isNarrow && hasWidth && `${width}px`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.any,
  customClass: PropTypes.string,
  isHiddenTouch: PropTypes.bool,
  isNarrow: PropTypes.bool,
  offset: PropTypes.string,
  span: PropTypes.string,
  width: PropTypes.string,
};

export default Column;
