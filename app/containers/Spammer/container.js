import React from 'react';
import PropTypes from 'prop-types';

import { client } from 'pokebot/discord';

import Field from 'components/Bulma/Field';

export default class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBotting: false,
      isReady: false,
    };
  }
  spamMessage = (channel, messageListArray) => {
    if (this.state.isBotting && messageListArray.length > 0) {
      if (messageListArray.length === 1) {
        client.channels.get(channel).send(messageListArray[0]);
      } else {
        const i = Math.floor(Math.random() * messageListArray.length);
        client.channels.get(channel).send(messageListArray[i]);
      }
    }
  }
  toggleSpammer = (event) => {
    event.preventDefault();
    if (this.state.isBotting) {
      client.clearInterval(this.spamInterval);
    } else {
      this.spamInterval = client.setInterval(this.spamMessage, this.props.interval, this.props.channel, this.props.messageListArray);
    }
    this.setState({ isBotting: !this.state.isBotting });
  }
  updateSpammer = (event, field) => {
    event.preventDefault();
    const params = Object.assign({
      channel: this.props.channel,
      interval: this.props.interval,
      messageListString: this.props.messageListString,
    }, { [field]: event.target.value });
    this.props.updateSpammer(params);
  }
  updateChannel = (event) => {
    this.updateSpammer(event, 'channel');
  };
  updateInterval = (event) => {
    this.updateSpammer(event, 'interval');
  };
  updateMessageList = (event) => {
    this.updateSpammer(event, 'messageListString');
  };
  render() {
    const { isBotting } = this.state;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <Field>
          <label className="label">Channel</label>
          <div className="control">
            <input
              className="input"
              onChange={this.updateChannel}
              placeholder="Channel ID"
              type="number"
              value={this.props.channel}
            />
          </div>
        </Field>
        <label className="label">Spam Interval</label>
        <Field hasAddons>
          <p className="control is-expanded">
            <input
              className="input"
              onChange={this.updateInterval}
              placeholder="1000"
              type="number"
              value={this.props.interval}
            />
          </p>
          <p className="control">
            <a className="button is-static">ms</a>
          </p>
        </Field>
        <Field>
          <label className="label">Messages</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={this.updateMessageList}
              placeholder="List of Messages"
              value={this.props.messageListString}
            />
          </div>
        </Field>
        <button className={`button is-fullwidth ${isBotting ? 'is-danger' : 'is-info'}`} onClick={this.toggleSpammer}>
          {isBotting ? 'Stop' : 'Start'} Spammer
        </button>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  }
}

Container.propTypes = {
  channel: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired,
  messageListArray: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
  messageListString: PropTypes.string.isRequired,
  updateSpammer: PropTypes.func.isRequired,
};
