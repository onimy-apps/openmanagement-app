import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newEmployeeAction } from '../../../actions/admin';

class New extends Component {
  state = {
    data: {
      name: undefined,
      email: undefined,
      username: undefined,
      password: undefined,
      role: undefined,
      position: undefined
    },
    success: undefined,
    message: undefined
  }

  onSaveNewEmployee = (event) => {
    event.preventDefault();

    this.setState({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        role: event.target.role.value,
        position: event.target.position.value,  
      }
    }, () => {
      this.props.dispatch(newEmployeeAction(this.state.data));
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    console.log(prevState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSaveNewEmployee.bind(this)}>
          <div>
            <label>Name</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>Position</label>
            <input type='text' name='position' />
          </div>
          <div>
            <label>Username</label>
            <input type='text' name='username' />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' />
          </div>
          <div>
            <label>Role</label>
            <select name='role'>
              <option>Select One</option>
              <option value='Employee'>Employee</option>
              <option value='Manager'>Manager</option>
              <option value='Admin'>Admin</option>
            </select>
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(New);