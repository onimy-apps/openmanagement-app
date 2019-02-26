import React from 'react';
import { Redirect } from 'react-router-dom';

const EditForm = ({ data, success, message, onCancelHandle, onUpdateProfile }) => (
  <div>
    {(success) ? <Redirect to='/admin/profile' /> : <div>{message}</div>}
    <form onSubmit={onUpdateProfile}>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          defaultValue={data.name} />
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          defaultValue={data.email} />
      </div>
      <div>
        <label>Position</label>
        <input
          type='text'
          name='position'
          defaultValue={data.position} />
      </div>
      <div>
        <label>Username</label>
        <input
          type='text'
          name='username'
          defaultValue={data.username} />
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
          defaultValue={data.role}>
          <option>Select One</option>
          <option value='Employee'>Employee</option>
          <option value='Manager'>Manager</option>
          <option value='Admin'>Admin</option>
        </select>
      </div>
      <div>
        <button>Update</button>
        <button onClick={onCancelHandle}>Cancel</button>
      </div>
    </form>
  </div>
);

export default EditForm;