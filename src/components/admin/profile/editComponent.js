import React, { Component } from 'react';
import { adminProfileAction, adminProfileUpdateAction } from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Edit extends Component {
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

  render() {
    return (
      <div>
        {(this.state.success) ? <Redirect to='/admin/profile' /> : <div>{this.state.message}</div>}
        <form onSubmit={this.onUpdateProfile.bind(this)}>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              defaultValue={this.props.adminProfile.response.name} />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              defaultValue={this.props.adminProfile.response.email} />
          </div>
          <div>
            <label>Position</label>
            <input
              type='text'
              name='position'
              defaultValue={this.props.adminProfile.response.position} />
          </div>
          <div>
            <label>Username</label>
            <input
              type='text'
              name='username'
              defaultValue={this.props.adminProfile.response.username} />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              name='password' />
          </div>
          <div>
            <label>Role</label>
            <select
              name='role'
              defaultValue={this.props.adminProfile.response.role}>
              <option>Select One</option>
              <option value='Employee'>Employee</option>
              <option value='Manager'>Manager</option>
              <option value='Admin'>Admin</option>
            </select>
          </div>
          <div>
            <button>Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Edit);