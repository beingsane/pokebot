import React from 'react';
import PropTypes from 'prop-types';

import Field from 'components/Bulma/Field';
import Modal from 'components/Bulma/Modal';

export default class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  loginDiscord = (event) => {
    event.preventDefault();
    if (!this.state.isLoggedIn) {
      this.props.loginDiscord({ token: this.props.token });
      this.setState({ isLoggedIn: true });
    }
  }
  logoutDiscord = (event) => {
    event.preventDefault();
    if (this.state.isLoggedIn && this.props.isLoggedIn) {
      this.props.logoutDiscord();
      this.setState({ isLoggedIn: false });
    }
  }
  updateToken = (event) => {
    event.preventDefault();
    this.props.updateToken({ token: event.target.value });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn && this.props.isLoggedIn;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <Field>
          <label className="label">Discord Token</label>
          <div className="control">
            <input className="input" disabled value="secret" />
          </div>
        </Field>
        <button className="button is-fullwidth is-danger" onClick={this.logoutDiscord}>Logout</button>
        <Modal isActive={!isLoggedIn}>
          <Field>
            <label className="label">Discord Token</label>
            <div className="control">
              <input
                className="input"
                disabled={isLoggedIn}
                onChange={this.updateToken}
                placeholder="Discord Token"
                value={this.props.token}
              />
            </div>
          </Field>
          <button className="button is-fullwidth is-info" onClick={this.loginDiscord}>Login</button>
        </Modal>
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
