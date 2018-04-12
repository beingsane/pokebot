import React from 'react';
import PropTypes from 'prop-types';

const Component = (props) => {
  const { message } = props;
  return (
    <div className="notification">
      {message.content}
    </div>
  );
};

Component.propTypes = {
  message: PropTypes.object,
};

export default Component;
