import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const {
    children,
    href,
  } = props;

  return (
    <li>
      <a href={href && href}>
        {children}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
};

export default MenuItem;
