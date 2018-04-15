import React from 'react';
import PropTypes from 'prop-types';

const TimelineItem = (props) => {
  const {
    children,
  } = props;

  return (
    <header className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        {children}
      </div>
    </header>
  );
};

TimelineItem.propTypes = {
  children: PropTypes.any,
};

export default TimelineItem;
