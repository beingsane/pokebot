import React from 'react';
import PropTypes from 'prop-types';

import { client } from 'pokebot/discord';

import Column from 'components/Bulma/Column';

import PokecordMessage from 'components/Messages/Pokecord';
import PokemonMessage from 'components/Messages/Pokemon';
import UserMessage from 'components/Messages/User';

import { MESSAGE_TYPE } from './constants';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate() {
    this.endOfLog.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
  renderList = (list) => list.map((message) => {
    switch (message.type) {
      case MESSAGE_TYPE.CAUGHT:
        return <PokecordMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.LEVELUP:
        return <PokecordMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.WILD: {
        const catchPokemon = () => {
          const content = `p!catch ${message.pokemon}`;
          const channel = client.channels.get(message.channelId);
          channel.send(content);
          const timestamp = Math.floor(Date.now());
          this.props.saveMessage({
            author: client.user.username,
            channel: channel.name,
            content,
            guild: channel.guild.name,
            id: timestamp,
            image: client.user.avatarURL,
            time: timestamp,
            type: MESSAGE_TYPE.USER,
          });
        };
        return <PokemonMessage key={message.id} message={message} catchPokemon={catchPokemon} />;
      }
      case MESSAGE_TYPE.USER:
        return <UserMessage key={message.id} message={message} />;
      default:
        return null;
    }
  });
  render() {
    return (
      <Column customClass="is-message-log">
        {this.renderList(this.props.list)}
        <div className="media" ref={(element) => { this.endOfLog = element; }} />
      </Column>
    );
  }
}

Container.propTypes = {
  list: PropTypes.array.isRequired,
  saveMessage: PropTypes.func.isRequired,
};
