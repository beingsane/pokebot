import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = (props) => {
  const {
    children,
  } = props;

  const className = classNames('heading', {

  });

  return (
    <p className={className}>
      {children}
    </p>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
};

export default Heading;
