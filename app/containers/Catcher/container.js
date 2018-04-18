import React from 'react';
import PropTypes from 'prop-types';

import Field from 'components/Bulma/Field';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
    };
  }
  toggleCatcher = (event) => {
    event.preventDefault();
    this.setState({ enabled: !this.state.enabled });
  }
  updateCatcher = (event, field) => {
    event.preventDefault();
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const params = Object.assign({
      delay: this.props.delay,
      channelWhitelistString: this.props.channelWhitelistString,
      ignoreChannelWhitelist: this.props.ignoreChannelWhitelist,
      pokemonWhitelistString: this.props.pokemonWhitelistString,
      ignorePokemonWhitelist: this.props.ignorePokemonWhitelist,
    }, { [field]: value });
    this.props.updateCatcher(params);
  }
  updateDelay = (event) => {
    this.updateCatcher(event, 'delay');
  };
  updateChannelWhitelist = (event) => {
    this.updateCatcher(event, 'channelWhitelistString');
  };
  updateIgnoreChannelWhitelist = (event) => {
    this.updateCatcher(event, 'ignoreChannelWhitelist');
  };
  updatePokemonWhitelist = (event) => {
    this.updateCatcher(event, 'pokemonWhitelistString');
  };
  updateIgnorePokemonWhitelist = (event) => {
    this.updateCatcher(event, 'ignorePokemonWhitelist');
  };
  render() {
    const { enabled } = this.state;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <label className="label">Auto Catch Delay</label>
        <Field hasAddons>
          <p className="control is-expanded">
            <input
              className="input"
              onChange={this.updateDelay}
              placeholder="1000"
              type="number"
              value={this.props.delay}
            />
          </p>
          <p className="control">
            <a className="button is-static">ms</a>
          </p>
        </Field>
        <Field>
          <label className="label">Channel Whitelist</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={this.updateChannelWhitelist}
              placeholder="List of Channel IDs"
              value={this.props.channelWhitelistString}
            />
          </div>
        </Field>
        <Field>
          <div className="control">
            <label className="checkbox">
              <input
                checked={this.props.ignoreChannelWhitelist}
                onChange={this.updateIgnoreChannelWhitelist}
                type="checkbox"
              /> Ignore Channel Whitelist
            </label>
          </div>
        </Field>
        <Field>
          <label className="label">Pokémon Whitelist</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={this.updatePokemonWhitelist}
              placeholder="Bulbasaur, Charmander, Squirtle"
              value={this.props.pokemonWhitelistString}
            />
          </div>
        </Field>
        <Field>
          <div className="control">
            <label className="checkbox">
              <input
                checked={this.props.ignorePokemonWhitelist}
                onChange={this.updateIgnorePokemonWhitelist}
                type="checkbox"
              /> Ignore Pokémon Whitelist
            </label>
          </div>
        </Field>
        <button className={`button is-fullwidth ${enabled ? 'is-danger' : 'is-info'}`} onClick={this.toggleCatcher}>
          {enabled ? 'Stop' : 'Start'} Catcher
        </button>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  }
}

Container.propTypes = {
  delay: PropTypes.string.isRequired,
  channelWhitelistString: PropTypes.string.isRequired,
  ignoreChannelWhitelist: PropTypes.bool.isRequired,
  pokemonWhitelistString: PropTypes.string.isRequired,
  ignorePokemonWhitelist: PropTypes.bool.isRequired,
  updateCatcher: PropTypes.func.isRequired,
};
