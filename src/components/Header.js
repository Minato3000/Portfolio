import './Header.css';

function Header() {
    return (
        <div className="Header">
            <h2 className='Nav-Header'>Portfolio</h2>
            <div className='Navbar'>
                <ul className='Nav-Items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>  
                </ul>
            </div>
        </div>
    );
};

export default Header;