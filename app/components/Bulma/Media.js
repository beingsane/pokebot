import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Media = (props) => {
  const {
    children,
    animateFadeIn,
  } = props;

  const className = classNames('media', {
    'fade-in': animateFadeIn,
  });

  return (
    <article className={className}>
      {children}
    </article>
  );
};

Media.propTypes = {
  animateFadeIn: PropTypes.bool,
  children: PropTypes.any,
};

export default Media;
