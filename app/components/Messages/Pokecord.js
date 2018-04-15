import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Content from 'components/Bulma/Content';
import Figure from 'components/Bulma/Figure';
import MediaContent from 'components/Bulma/MediaContent';
import MediaLeft from 'components/Bulma/MediaLeft';
import Tag from 'components/Bulma/Tag';

const Component = (props) => {
  const { message } = props;
  return (
    <article className="media" key={message.id}>
      <MediaLeft>
        <Figure is64 src={message.image} alt={message.author} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{message.author}</strong> <Tag isInfo>Bot</Tag>
            <br />
            {message.content}
            <br />
            <small>{moment(message.time).format('h:mm a')}</small>
          </p>
        </Content>
      </MediaContent>
    </article>
  );
};

Component.propTypes = {
  message: PropTypes.object,
};

export default Component;
