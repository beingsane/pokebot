import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Component = (props) => {
  const { catchPokemon, message } = props;
  return (
    <article className="media" key={message.id}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={message.image} alt={message.content} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{message.guild}</strong> <small>{`#${message.channel}`}</small>
            <br />
            {message.content}
            <br />
            <small><a onClick={catchPokemon}>Catch</a> · {moment(message.time).format('h:mm a')}</small>
          </p>
        </div>
      </div>
    </article>
  );
};

Component.propTypes = {
  message: PropTypes.object,
};

export default Component;
