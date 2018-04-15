import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = (props) => {
  const {
    children,
    isFullHeight,
    isHiddenTouch,
    isNarrow,
    isOverflowY,
    isSidebar,
    offset,
    span,
    width,
  } = props;

  const hasOffset = !isNaN(offset);
  const hasSpan = !isNaN(span);
  const hasWidth = !isNaN(width);

  const className = classNames('column', {
    'is-hidden-touch': isHiddenTouch,
    'is-fullheight': isFullHeight,
    'is-narrow': isNarrow,
    'is-overflow-y': isOverflowY,
    'is-sidebar': isSidebar,
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
  isFullHeight: PropTypes.bool,
  isHiddenTouch: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isOverflowY: PropTypes.bool,
  isSidebar: PropTypes.bool,
  offset: PropTypes.string,
  span: PropTypes.string,
  width: PropTypes.string,
};

export default Column;
