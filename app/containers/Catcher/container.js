import React from 'react';
// import PropTypes from 'prop-types';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <label className="label">Auto Catch Delay</label>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input className="input" type="number" placeholder="1000" />
          </p>
          <p className="control">
            <a className="button is-static">ms</a>
          </p>
        </div>
        <div className="field">
          <label className="label">Channel Whitelist</label>
          <div className="control">
            <textarea className="textarea" placeholder="List of Channel IDs" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" /> Ignore Channel Whitelist
            </label>
          </div>
        </div>
        <div className="field">
          <label className="label">Pokémon Whitelist</label>
          <div className="control">
            <textarea className="textarea" placeholder="Bulbasaur, Charmander, Squirtle" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" /> Ignore Pokémon Whitelist
            </label>
          </div>
        </div>
        <button className="button is-fullwidth is-info">Start</button>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  }
}

// Container.propTypes = {
// };
