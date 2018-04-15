import React from 'react';
import PropTypes from 'prop-types';

import { client } from 'app';
import pokebot from 'configureBot';
import pokemon from 'fixtures/pokemon.json';

import Column from 'components/Bulma/Column';

import CaughtMessage from 'components/Messages/Caught';
import LevelUpMessage from 'components/Messages/LevelUp';
import WildMessage from 'components/Messages/Wild';

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
  // componentDidUpdate(prevProps) {
  //   if (this.props.list.length > prevProps.list.length) {
  //     this.messageLog.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'end',
  //       inline: 'nearest',
  //     });
  //   }
  // }
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
        content: message.content.replace(`<@${client.user.id}>`, client.user.username),
        id: message.id,
        type: MESSAGE_TYPE.CAUGHT,
      });
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
  onWild = (message) => {
    const embed = message.embeds[0];
    const { catcher } = pokebot;
    if (embed.title === 'A wild pokémon has appeared!') {
      const image = embed.image.url.match(/([^/]+)(?=\.\w+$)/)[0];
      const shouldCatchPokemon = catcher.ignorePokemonWhitelist || catcher.pokemonWhitelist.indexOf(pokemon[image]) > -1;
      const shouldCatchInChannel = catcher.ignoreChannelWhitelist || catcher.channelWhitelist.indexOf(message.channel.id) > -1;
      if (pokebot.catcher.enabled && shouldCatchPokemon && shouldCatchInChannel) {
        const catchPokemon = () => {
          this.sendMessage(message.channel.id, `p!catch ${pokemon[image]}`);
        };
        setTimeout(catchPokemon, pokebot.catcher.delay);
      }
      this.saveMessage({
        channel: message.channel.name,
        channelId: message.channel.id,
        content: `A wild ${pokemon[image]} has appeared!`,
        id: message.id,
        image: embed.image.url,
        guild: message.guild.name,
        pokemon: pokemon[image],
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
  spamMessage = (channel, message) => {
    const i = Math.floor(Math.random() * message.length);
    this.sendMessage(channel, message[i]);
  }
  renderList = (list) => list.map((message) => {
    switch (message.type) {
      case MESSAGE_TYPE.CAUGHT:
        return <CaughtMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.LEVELUP:
        return <LevelUpMessage key={message.id} message={message} />;
      case MESSAGE_TYPE.WILD: {
        const catchPokemon = () => {
          this.sendMessage(message.channelId, `p!catch ${message.pokemon}`);
        };
        return <WildMessage key={message.id} message={message} catchPokemon={catchPokemon} />;
      }
      default:
        return null;
    }
  });
  render() {
    return (
      <Column isFullHeight isOverflowY>
        {this.renderList(this.props.list)}
      </Column>
    );
  }
}

Container.propTypes = {
  list: PropTypes.array,
  saveMessage: PropTypes.func,
};
