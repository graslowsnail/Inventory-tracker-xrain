import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/'> ALL WORKDAY </NavLink>
        </li>
        <li>
            <NavLink to='/new/workday'> NEW WORKDAY </NavLink>
        </li>
        <li>
            <NavLink to='/parts'> ALL PARTS </NavLink>
        </li>
        <li>
            <NavLink to='/new/parts'> NEW PART </NavLink>
        </li>
        <li>
            <NavLink to='/auth'> AUTHENTHICATE </NavLink>
        </li>
    </ul>
  );
};

export default NavLinks;
