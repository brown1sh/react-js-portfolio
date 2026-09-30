import {useState, useEffect} from "react";
import {Link} from "react-scroll";
import MyResume from "./Resume";

function NavBar({onPlayGame})
{
    const [navActive, setNavActive] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const toggleNav = () => { setNavActive(!navActive); };

    const closeMenu = () => { setNavActive(false); };

    useEffect( () => 
        {
            const handleResize = () =>
                {
                    if (window.innerWidth <= 500)
                    {
                        closeMenu();
                    }
                };

            window.addEventListener("resize", handleResize);

            return () => 
                {
                    window.removeEventListener("resize", handleResize);
                };

        }, []);

    useEffect( () =>
        {
            if (window.innerWidth <= 1200)
            {
                closeMenu();
            }

        }, []);

    return (
        <nav className={`navBar ${navActive? "active" : ""}`}>
            <div>
                <img className="navBar--logo" src="./img/header-icon3.png" alt="Jack Brown - Portfolio" />
            </div>
            <a className= {`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navBar--items ${navActive ? "active" :""}`}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navBar--active--content" 
                            spy={true}
                            smooth = {true}
                            offset={-70}
                            duration={500}
                            to="HeroSection"
                            className="navBar--content">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navBar--active--content" 
                            spy={true}
                            smooth = {true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navBar--content">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navBar--active--content" 
                            spy={true}
                            smooth = {true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navBar--content">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                             activeClass="navBar--active--content" 
                            onClick={() => {
                                closeMenu();
                                setIsResumeOpen(true);
                            }}
                            className="navBar--content">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navBar--active--content"
                            onClick={() => {
                                closeMenu();
                                onPlayGame();
                            }}
                            className="navBar--content">                  
                            Play Snake
                        </Link>
                    </li>
                </ul>
            </div>
            <Link 
                onClick={closeMenu}  
                spy={true}
                smooth = {true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary">
                Contact Me
            </Link>
            <MyResume
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}    
            />
        </nav>
    );
}

export default NavBar;