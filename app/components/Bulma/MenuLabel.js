import React from 'react';
import PropTypes from 'prop-types';

const MenuLabel = (props) => (
  <p className="menu-label">
    {props.children}
  </p>
);

MenuLabel.propTypes = {
  children: PropTypes.any,
};

export default MenuLabel;
