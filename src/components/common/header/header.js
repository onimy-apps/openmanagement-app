import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Employees from '../../admin/employees/employees';
import New from '../../admin/new/new';
import Profile from '../../admin/profile/profile';

const Header = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/list`}>Employees</Link></li>
      <li><Link to={`${match.path}/new`}>New</Link></li>
      <li><Link to={`${match.path}/profile`}>Profile</Link></li>
    </ul>
    <Route path={`${match.path}/list`} component={Employees} />
    <Route path={`${match.path}/new`} component={New} />
    <Route path={`${match.path}/profile`} component={Profile} />
  </div>
);

export default Header;