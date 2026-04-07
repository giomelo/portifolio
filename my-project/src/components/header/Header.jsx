import React, { useState, useEffect } from 'react';
import './Header.css';
import useTexts from '../../hooks/useTexts';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const texts = useTexts();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);

    const currentPath = location.pathname.replace(/\/$/, "").toLowerCase();
    const isPortfolioPage = currentPath === '' || currentPath === '/' || currentPath === '/portifolio';

    useEffect(() => {
        const handleResize = () => {
            const mobileCheck = window.innerWidth <= 768;
            setIsMobile(mobileCheck);
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {

            if (isMobile) {
                if (scrolled) setScrolled(false);
                return;
            }
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, scrolled]);

    const handleNavigation = (section) => {
        const pathCheck = window.location.pathname.replace(/\/$/, "").toLowerCase();
        const isOnHome = pathCheck === '' || pathCheck === '/' || pathCheck === '/portifolio';
        
        if (isOnHome) {
            scrollToSection(section);
        } else {
            navigate('/', { state: { scrollTo: section } });
        }
    };

    const scrollToSection = (section) => {
        const sectionMap = {
            about: 'about',
            projects: 'projects',
            contact: 'contact',
        };
        const el = document.getElementById(sectionMap[section]);
        if (el) {
            setMenuOpen(false);
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const headerClassName = `header ${
        (!isPortfolioPage && !isMobile)
        ? 'header-solid' 
        : (scrolled && !isMobile ? 'scrolled' : '')
    }`;

    return (
        <header className={headerClassName}>
            <a href="/portifolio" className="header-logo">Portfolio</a>

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className="nav-option" onClick={() => handleNavigation('about')}>
                                    {texts.About_Header}
                                </button>
                                <Link to="/projects" onClick={() => setMenuOpen(false)}>
                                    <button className="nav-option">
                                        {texts.Project_Header}
                                    </button>
                                </Link>
                                <button className="nav-option" onClick={() => handleNavigation('contact')}>
                                    {texts.Contact_Header}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav className="nav-header">
                    <ul>
                        <li>
                            <button className="nav-option" onClick={() => handleNavigation('about')}>
                                {texts.About_Header}
                            </button>
                            <Link to="/projects">
                                <button className="nav-option">
                                    {texts.Project_Header}
                                </button>
                            </Link>
                            <button className="nav-option" onClick={() => handleNavigation('contact')}>
                                {texts.Contact_Header}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;