import React from 'react';
import PropTypes from 'prop-types';

const MenuList = (props) => (
  <ul className="menu-list">
    {props.children}
  </ul>
);

MenuList.propTypes = {
  children: PropTypes.any,
};

export default MenuList;
