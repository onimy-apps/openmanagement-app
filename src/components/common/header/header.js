import React from 'react';
import { Link, Route } from 'react-router-dom';

import Employees from '../../admin/employees/employeesComponent';
import New from '../../admin/new/newComponent';
import Profile from '../../admin/profile/profileComponent';
import Logout from '../../logoutComponent';
import { getCookie } from '../../../utils/cookies';
import List from '../../employees/list/listComponent';
import Project from '../../employees/project/createProjectComponent';

const Header = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/dashboard`}>Dashboard</Link></li>
      <li>
        {
          (getCookie('role') === 'Admin')
          ?
          <Link to={`${match.path}/new`}>New</Link>
          :
          <Link to={`${match.path}/create`}>Create Project</Link>
        }
      </li>
      <li><Link to={`${match.path}/profile`}>Profile</Link></li>
      <li><Link to={`${match.path}/logout`}>Logout</Link></li>
    </ul>
    <div>Welcome {getCookie('name')}</div>
    <Route path={`${match.path}/dashboard`} component={List} />
    <Route path={`${match.path}/new`} component={New} />
    <Route path={`${match.path}/profile`} component={Profile} />
    <Route path={`${match.path}/logout`} component={Logout} />
    <Route path={`${match.path}/create`} component={Project} />
  </div>
);

export default Header;