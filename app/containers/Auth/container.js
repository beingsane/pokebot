import React from 'react';
import PropTypes from 'prop-types';

import Field from 'components/Bulma/Field';

export default class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.logoutDiscord({ toast: false });
  }
  authDiscord = (event) => {
    event.preventDefault();
    if (this.props.isLoggedIn) {
      this.props.logoutDiscord();
    } else {
      this.props.loginDiscord({ token: this.props.token });
    }
  }
  updateToken = (event) => {
    event.preventDefault();
    this.props.updateToken({ token: event.target.value });
  }
  render() {
    const { isLoggedIn } = this.props;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <Field>
          <label className="label">Discord Token</label>
          <div className="control">
            <input
              className="input"
              disabled={this.props.isLoggedIn}
              onChange={this.updateToken}
              placeholder="Discord Token"
              value={this.props.token}
            />
          </div>
        </Field>
        <button className={`button is-fullwidth ${isLoggedIn ? 'is-danger' : 'is-info'}`} onClick={this.authDiscord}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  }
}

Container.propTypes = {
  token: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loginDiscord: PropTypes.func.isRequired,
  logoutDiscord: PropTypes.func.isRequired,
  updateToken: PropTypes.func.isRequired,
};
