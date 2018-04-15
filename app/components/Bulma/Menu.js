import React from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="menu">
      {children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.any,
};

export default Menu;
