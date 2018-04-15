import React from 'react';
import PropTypes from 'prop-types';

const TimelineHeader = (props) => {
  const {
    children,
  } = props;

  return (
    <header className="timeline-header">
      {children}
    </header>
  );
};

TimelineHeader.propTypes = {
  children: PropTypes.any,
};

export default TimelineHeader;
