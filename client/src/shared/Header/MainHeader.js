import './MainHeader.css';

//import xrainLogo from './xrainLogo.jpg';

const MainHeader = props => {

    return (
      <header className='main-header'>
        {props.children}
      </header>
    );
};

export default MainHeader;
