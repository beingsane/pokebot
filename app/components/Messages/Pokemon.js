import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Content from 'components/Bulma/Content';
import Figure from 'components/Bulma/Figure';
import MediaContent from 'components/Bulma/MediaContent';
import MediaLeft from 'components/Bulma/MediaLeft';
import Tag from 'components/Bulma/Tag';

const Component = (props) => {
  const { catchPokemon, message } = props;
  return (
    <article className="media fade-in" key={message.id}>
      <MediaLeft>
        <Figure is64 src={message.image} alt={message.content} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{message.guild}</strong> <small>{`#${message.channel}`}</small>
            <br />
            {message.content}
            <br />
            <small><Tag isDanger onClick={catchPokemon}>Catch</Tag> {moment(message.time).format('h:mm a')}</small>
          </p>
        </Content>
      </MediaContent>
    </article>
  );
};

Component.propTypes = {
  catchPokemon: PropTypes.func,
  message: PropTypes.object,
};

export default Component;
