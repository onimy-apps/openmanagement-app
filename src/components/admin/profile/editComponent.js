import React, { Component } from 'react';
import { adminProfileAction, adminProfileUpdateAction } from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditForm from './editForm';

class Edit extends Component {
  _success = undefined;

  state = {
    cookies: {
      id: getCookie('id'),
      role: getCookie('role')
    },
    success: undefined,
    message: undefined,
    profile: undefined
  }

  constructor(props) {
    super(props);
    this.props.dispatch(adminProfileAction(this.state.cookies));
  }

  onUpdateProfile = event => {
    event.preventDefault();

    this.setState({
      profile: {
        name: event.target.name.value,
        email: event.target.email.value,
        position: event.target.position.value,
        username: event.target.username.value,
        password: event.target.password.value,
        role: event.target.role.value
      }
    }, () => {
      this.props.dispatch(adminProfileUpdateAction({
        profile: this.state.profile,
        access: this.state.cookies
      }));
    });

    this._success = true;
  }

  onCancelHandle = event => {
    this._success = false;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.updateProfile.hasOwnProperty('response')) {
      return {
        success: nextProps.updateProfile.response.success,
        message: nextProps.updateProfile.response.message
      }
    }

    return {
      success: undefined,
      message: undefined
    }
  }

  componentWillUnmount() {
    this._success = false;
  }

  render() {
    return (
      <div>
        <EditForm
          data={this.props.adminProfile.response}
          success={this._success}
          message={this.state.message}
          onCancelHandle={this.onCancelHandle}
          onUpdateProfile={this.onUpdateProfile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Edit);