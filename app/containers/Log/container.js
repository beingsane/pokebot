import React from 'react';
import PropTypes from 'prop-types';

import { client } from 'app';
import pokebot from 'configureBot';
import pokemon from 'fixtures/pokemon.json';

import Column from 'components/Bulma/Column';

import PokecordMessage from 'components/Messages/Pokecord';
import PokemonMessage from 'components/Messages/Pokemon';
import UserMessage from 'components/Messages/User';

import {
  MESSAGE_TYPE,
  POKECORD_USERID,
} from './constants';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    client.on('message', this.onMessage);
    if (pokebot.spammer.enabled) {
      client.setInterval(this.spamMessage, pokebot.spammer.interval, pokebot.spammer.channel, pokebot.spammer.message);
    }
  }
  componentDidUpdate() {
    this.endOfLog.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
  componentWillUnmount() {
    client.removeEventListener('message', this.onMessage);
    if (pokebot.spammer.enabled) {
      client.clearInterval(this.spamInterval);
    }
  }
  onMessage = (message) => {
    if (message.author.id === POKECORD_USERID) {
      if (message.embeds.length > 0) {
        this.onWild(message);
      }
      this.onCatch(message);
      this.onLevelUp(message);
    }
  }
  onCatch = (message) => {
    if (message.content.includes(`Congratulations <@${client.user.id}>`)) {
      this.saveMessage({
        author: message.author.username,
        content: message.content.replace(`<@${client.user.id}>`, client.user.username),
        id: message.id,
        image: message.author.avatarURL,
        time: message.createdTimestamp,
        type: MESSAGE_TYPE.CAUGHT,
      });
    }
  }
  onLevelUp = (message) => {
    if (message.content.includes(`Congratulations ${client.user.username}`)) {
      this.saveMessage({
        author: message.author.username,
        content: message.content.replace(/`/g, ''),
        id: message.id,
        image: message.author.avatarURL,
        time: message.createdTimestamp,
        type: MESSAGE_TYPE.LEVELUP,
      });
    }
  }
  onWild = (message) => {
    const embed = message.embeds[0];
    const { catcher } = pokebot;
    if (embed.title === 'A wild pokémon has appeared!') {
      const image = embed.image.url.match(/([^/]+)(?=\.\w+$)/)[0];
      const shouldCatchPokemon = catcher.ignorePokemonWhitelist || catcher.pokemonWhitelist.indexOf(pokemon[image]) > -1;
      const shouldCatchInChannel = catcher.ignoreChannelWhitelist || catcher.channelWhitelist.indexOf(message.channel.id) > -1;
      if (pokebot.catcher.enabled && shouldCatchPokemon && shouldCatchInChannel) {
        const catchPokemon = () => {
          this.sendMessage(message.channel.id, `p!catch ${pokemon[image].toLowerCase()}`, true);
        };
        setTimeout(catchPokemon, pokebot.catcher.delay);
      }
      this.saveMessage({
        channel: message.channel.name,
        channelId: message.channel.id,
        content: `A wild ${pokemon[image]} has appeared!`,
        guild: message.guild.name,
        id: message.id,
        image: embed.image.url,
        pokemon: pokemon[image],
        time: message.createdTimestamp,
        type: MESSAGE_TYPE.WILD,
      });
    }
  }
  saveMessage = (message) => {
    this.props.saveMessage({ message });
  }
  sendMessage = (channelID, message, shouldSave = false) => {
    if (channelID && message) {
      const channel = client.channels.get(channelID);
      channel.send(message);
      if (shouldSave) {
        const timestamp = Math.floor(Date.now());
        this.saveMessage({
          author: client.user.username,
          channel: channel.name,
          content: message,
          guild: channel.guild.name,
          id: timestamp,
          image: client.user.avatarURL,
          time: timestamp,
          type: MESSAGE_TYPE.USER,
        });
      }
    }
  }
  spamMessage = (channel, message) => {
    switch (message.length) {
      case 0:
        break;
      case 1:
        this.sendMessage(channel, message[0]);
        break;
      default: {
        const i = Math.floor(Math.random() * message.length);
        this.sendMessage(channel, message[i]);
        break;
      }
    }
  }
  renderList = (list) => list.map((message) => {
    switch (message.type) {
      case MESSAGE_TYPE.CAUGHT:
        return <PokecordMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.LEVELUP:
        return <PokecordMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.WILD: {
        const catchPokemon = () => {
          this.sendMessage(message.channelId, `p!catch ${message.pokemon}`, true);
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
      <Column isFullHeight isOverflowY>
        {this.renderList(this.props.list)}
        <div className="media" ref={(element) => { this.endOfLog = element; }} />
      </Column>
    );
  }
}

Container.propTypes = {
  list: PropTypes.array,
  saveMessage: PropTypes.func,
};
