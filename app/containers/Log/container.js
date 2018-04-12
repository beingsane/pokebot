import React from 'react';
import PropTypes from 'prop-types';

import { client } from 'app';
import pokebot from 'configureBot';
import pokemon from 'fixtures/pokemon.json';

import CaughtMessage from 'components/Messages/Caught';
import LevelUpMessage from 'components/Messages/LevelUp';
import WildMessage from 'components/Messages/Wild';

import {
  MESSAGE_TYPE,
  POKECORD_USERID,
} from './constants';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (pokebot.catcher.enabled) {
      client.on('message', this.onMessage);
    }
    if (pokebot.spammer.enabled) {
      const {
        channel,
        interval,
        message,
      } = pokebot.spammer;
      client.setInterval(this.sendMessage, interval, channel, message);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.list.length > prevProps.list.length) {
      this.bottomOfLog.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }
  componentWillUnmount() {
    if (pokebot.catcher.enabled) {
      client.removeEventListener('message', this.onMessage);
    }
    if (pokebot.spammer.enabled) {
      client.clearInterval(this.spamInterval);
    }
  }
  onMessage = (message) => {
    if (message.author.id === POKECORD_USERID) {
      if (message.embeds.length > 0) {
        this.onWildAppearance(message);
      }
      this.onLevelUp(message);
    }
  }
  onLevelUp = (message) => {
    if (message.content.includes(`Congratulations ${client.user.username}`)) {
      this.saveMessage({
        content: message.content.replace(/`/g, ''),
        id: message.id,
        type: MESSAGE_TYPE.LEVELUP,
      });
    }
  }
  onWildAppearance = (message) => {
    const embed = message.embeds[0];
    const { catcher, spammer } = pokebot;
    if (embed.title === 'A wild pokémon has appeared!') {
      const image = embed.image.url.match(/([^/]+)(?=\.\w+$)/)[0];
      const shouldCatchPokemon = catcher.ignorePokemonWhitelist || catcher.pokemonWhitelist.indexOf(pokemon[image]) > -1;
      const shouldCatchInChannel = catcher.ignoreChannelWhitelist || spammer.channelWhitelist.indexOf(message.channel.id) > -1;
      if (shouldCatchPokemon && shouldCatchInChannel) {
        client.channels.get(message.channel.id).send(`p!catch ${pokemon[image]}`);
      }
      this.saveMessage({
        channel: message.channel.name,
        content: `A wild ${pokemon[image]} has appeared!`,
        id: message.id,
        image: embed.image.url,
        guild: message.guild.name,
        time: message.createdTimestamp,
        type: MESSAGE_TYPE.WILD,
      });
    }
  }
  saveMessage = (message) => {
    this.props.saveMessage({ message });
  }
  sendMessage = (channel, message) => {
    client.channels.get(channel).send(message);
  }
  renderMessageList = (list) => list.map((message) => {
    switch (message.type) {
      case MESSAGE_TYPE.CAUGHT:
        return <CaughtMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.LEVELUP:
        return <LevelUpMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.WILD:
        return <WildMessage key={message.id} message={message} />;
      default:
        return null;
    }
  });
  render() {
    return (
      <div className="container">
        <div className="content">
          {this.renderMessageList(this.props.list)}
          <div ref={(element) => { this.bottomOfLog = element; }} />
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  list: PropTypes.array,
  saveMessage: PropTypes.func,
};
