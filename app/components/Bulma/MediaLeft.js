import React from 'react';
import PropTypes from 'prop-types';

const MediaLeft = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="media-left">
      {children}
    </div>
  );
};

MediaLeft.propTypes = {
  children: PropTypes.any,
};

export default MediaLeft;
