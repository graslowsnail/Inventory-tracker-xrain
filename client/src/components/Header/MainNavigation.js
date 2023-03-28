import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
//import SideDrawer from './SideDrawer';
//import BackDrop from '../

const MainNavigation = props => {


    return(
        <MainHeader> 
            <button className='main-navigation__menu-btn'> </button>
            <h1 className='main-navigation__title'>
                 <Link to='/'>YourPlaces</Link>
            </h1>

            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
        </MainHeader>
    );
};

export default MainNavigation;

