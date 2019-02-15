import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Employees from '../../admin/employees/employees';

const Header = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/list`}>Employees</Link></li>
      <li><Link to={`${match.path}/new`}>New</Link></li>
      <li><Link to={`${match.path}/profile`}>Profile</Link></li>
    </ul>
    <Route path={`${match.path}/list`} component={Employees} />
  </div>
);

export default Header;