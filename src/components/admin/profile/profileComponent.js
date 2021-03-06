import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminProfileAction } from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import { Link, Route } from 'react-router-dom';
import Edit from './editComponent';

class Profile extends Component {
  state = {
    cookies: {
      id: getCookie('id'),
      role: getCookie('role')
    }
  }

  constructor(props) {
    super(props);
    this.props.dispatch(adminProfileAction(this.state.cookies));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.adminProfile.hasOwnProperty('response')) {
      return {
        profile: nextProps.adminProfile.response
      }
    }

    return {
      profile: undefined
    }
  }

  render() {
    if (this.state.profile === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul>
          <li>Name: {this.state.profile.name}</li>
          <li>Email: {this.state.profile.email}</li>
          <li>Position: {this.state.profile.position}</li>
          <li>Username: {this.state.profile.username}</li>
          <li>Role: {this.state.profile.role}</li>
          <li><Link to={`${this.props.match.path}/edit`}>Edit</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/edit`} component={Edit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Profile);