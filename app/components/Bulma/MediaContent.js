import React from 'react';
import PropTypes from 'prop-types';

const MediaContent = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="media-content">
      {children}
    </div>
  );
};

MediaContent.propTypes = {
  children: PropTypes.any,
};

export default MediaContent;
