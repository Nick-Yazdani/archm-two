import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {
    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)");
    const [width, setWidth] = useState('0%');
    const [navItems, setNavItems] = useState({})
    const [rotation, setRotation] = useState({ rotated: false })

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const bg = window.scrollY < 100 ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 1)";
            setBackgroundColor(bg)
            let maxScrollHeight = window.document.body.scrollHeight - window.innerHeight;
            let scrollYCoord = window.scrollY;

            let width = `${Math.round((scrollYCoord / maxScrollHeight) * 100).toFixed(2)}%`;
            setWidth(width);

        })
    }, [])

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/navigation/60')
            .then(res => res.json())
            .then(res => {
                setNavItems(res.acf)
            })
    }, [])


    return (
        <header className="header" style={{ backgroundColor }}>
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <span className="header-nav__logo--text"><Link to="/" className="header-nav__logo--text--link">ARCHM Industries</Link></span>
                </div>
                <div className="header-nav-container">
                    <ul className="header-nav-container__list">
                        {navItems.items ? navItems.items.split(',').map((item, key) => {
                            return (
                                <li key={item} className="header-nav-container__list--item"><Link to={navItems.links.split(',')[key]} id={`${history.location.pathname === navItems.links.split(',')[key] ? 'link--active' : null}`} className="header-nav-container__list--item--link">{item}</Link></li>
                            )
                        }) : null}
                    </ul>
                </div>
                <div className={`header-nav-hamburger ${rotation.rotated ? 'header-nav--rotated' : 'header-nav--straight'}`} onClick={() => {
                    rotation.rotated ? setRotation({ rotated: false }) : setRotation({ rotated: true});
                }}>
                    <span className="header-nav-hamburger__line"></span>
                    <span className="header-nav-hamburger__line"></span>
                    <span className="header-nav-hamburger__line"></span>
                </div>
            </nav>
            <div className="header-progress__container fixed-top" style={{ transition: "width .3s" }}>
                <span className="header-progress__container--bar" style={{ width: `${width}` }}></span>
            </div>
            <div className="header-dropdown">
            <ul className={`header-dropdown-container__list ${rotation.rotated ? 'header-dropdown--fade' : 'header-dropdown--hidden'}`}>
                        {navItems.items ? navItems.items.split(',').map((item, key) => {
                            return (
                                <li key={item} className="header-dropdown-container__list--item"><Link to={navItems.links.split(',')[key]} id={`${history.location.pathname === navItems.links.split(',')[key] ? 'link--active' : null}`} className="header-dropdown-container__list--item--link">{item}</Link></li>
                            )
                        }) : null}
                    </ul>
            </div>
        </header>
    )
}

export default withRouter(NavBar);