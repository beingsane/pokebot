import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Field = (props) => {
  const {
    children,
    hasAddons,
  } = props;

  const className = classNames('field', {
    'has-addons': hasAddons,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.any,
  hasAddons: PropTypes.bool,
};

export default Field;
