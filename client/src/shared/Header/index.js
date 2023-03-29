import './Header.css';

const Header = () => {
    return (
        <header className='main-header'>
            <h1 className='title'>X-Rain Inc. </h1>
            
            <ul className='nav-links'>
                <li>
                    ADD NEW PART
                </li>
                <li>
                    PARTS
                </li>
                <li>
                    AUTH
                </li>
            </ul>
        </header>
    );
};

export default Header;
