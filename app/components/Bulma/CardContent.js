import React from 'react';
import PropTypes from 'prop-types';

const CardContent = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="media-content">
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.any,
};

export default CardContent;
