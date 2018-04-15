import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = (props) => {
  const {
    children,
    isShadowless,
  } = props;

  const className = classNames('card', {
    'is-shadowless': isShadowless,
  });

  return (
    <div className={className}>
      <div className="card-content">
        <div className="media">
          {children}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  isShadowless: PropTypes.bool,
};

export default Card;
