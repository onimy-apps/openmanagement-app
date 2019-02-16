import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesListAction } from '../../../actions/admin';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(employeesListAction());
  }

  render() {
    if (this.props.list.response === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul>
          {this.props.list.response.map(list => (
            <li key={list._id}>{list.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Employees);