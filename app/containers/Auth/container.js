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
  authDiscord = (event) => {
    event.preventDefault();
    if (this.state.isLoggedIn && this.props.isLoggedIn) {
      this.props.logoutDiscord();
      this.setState({ isLoggedIn: false });
    } else {
      this.props.loginDiscord({ token: this.props.token });
      this.setState({ isLoggedIn: true });
    }
  }
  updateToken = (event) => {
    event.preventDefault();
    this.props.updateToken({ token: event.target.value });
  }
  /* eslint-disable jsx-a11y/label-has-for */
  renderForm = (isLoggedIn) => (
    <div>
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
      <button className={`button is-fullwidth ${isLoggedIn ? 'is-danger' : 'is-info'}`} onClick={this.authDiscord}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
  /* eslint-enable jsx-a11y/label-has-for */
  render() {
    const isLoggedIn = this.state.isLoggedIn && this.props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? this.renderForm(isLoggedIn) : (
          <Modal isActive={!isLoggedIn}>
            {this.renderForm(isLoggedIn)}
          </Modal>
        )}
      </div>
    );
  }
}

Container.propTypes = {
  token: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loginDiscord: PropTypes.func.isRequired,
  logoutDiscord: PropTypes.func.isRequired,
  updateToken: PropTypes.func.isRequired,
};
