import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Content from 'components/Bulma/Content';
import Figure from 'components/Bulma/Figure';
import Media from 'components/Bulma/Media';
import MediaContent from 'components/Bulma/MediaContent';
import MediaLeft from 'components/Bulma/MediaLeft';
import Tag from 'components/Bulma/Tag';

const Component = (props) => {
  const { message } = props;
  return (
    <Media animateFadeIn key={message.id}>
      <MediaLeft>
        <Figure is64 isRounded src={message.image} alt={message.author} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{message.author}</strong>
            <br />
            {message.content}
            <br />
            <Tag isInfo>User</Tag> <Tag isWarning>{message.guild} #{message.channel}</Tag> <small>{moment(message.time).format('h:mm a')}</small>
          </p>
        </Content>
      </MediaContent>
    </Media>
  );
};

Component.propTypes = {
  message: PropTypes.object,
};

export default Component;
