import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesListAction } from '../../../actions/admin';
import { Link, Route } from 'react-router-dom';
import Profiles from './profilesComponent';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(employeesListAction());
  }

  render() {
    if (this.props.list.response === undefined) {
      return <div>Loading...</div>
    }

    if (this.props.list.response.hasOwnProperty('status')) {
      return <div>{this.props.list.response.status} {this.props.list.response.text}</div>
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.response.map(list => (
              <tr key={list._id}>
                <td>
                  <Link to={`/admin/profiles/employee/${list._id}`}>{list.name}</Link>
                </td>
                <td>{list.username}</td>
                <td>{list.email}</td>
                <td>{list.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Employees);