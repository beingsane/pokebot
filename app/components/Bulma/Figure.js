import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Figure = (props) => {
  const {
    alt,
    href,
    is16,
    is24,
    is32,
    is48,
    is64,
    is96,
    is128,
    isRounded,
    src,
  } = props;

  const className = classNames('image', {
    'is-16x16': is16,
    'is-24x24': is24,
    'is-32x32': is32,
    'is-48x48': is48,
    'is-64x64': is64,
    'is-96x96': is96,
    'is-128x128': is128,
    'is-rounded': isRounded,
  });

  return (
    <figure className={className}>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};

Figure.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  is16: PropTypes.bool,
  is24: PropTypes.bool,
  is32: PropTypes.bool,
  is48: PropTypes.bool,
  is64: PropTypes.bool,
  is96: PropTypes.bool,
  is128: PropTypes.bool,
  isRounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

export default Figure;
