import React from 'react';
import PropTypes from 'prop-types';

const CardLeft = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="media-left">
      {children}
    </div>
  );
};

CardLeft.propTypes = {
  children: PropTypes.any,
};

export default CardLeft;
