import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = (props) => {
  const {
    children,
    isActive,
  } = props;

  const className = classNames('modal', {
    'is-active': isActive,
  });

  return (
    <div className={className}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <article className="message">
          <div className="message-body">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
};

export default Modal;
