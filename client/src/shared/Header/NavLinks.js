import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/' exact> ALL USERS </NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'> PARTS </NavLink>
        </li>
        <li>
            <NavLink to='/places/new'> NEW PART </NavLink>
        </li>
        <li>
            <NavLink to='/auth'> AUTHENTHICATE </NavLink>
        </li>
    </ul>
  );
};

export default NavLinks;
