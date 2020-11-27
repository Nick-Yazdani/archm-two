import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ match }) => {
    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)");
    const [width, setWidth] = useState('0%');
    
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

    return (
        <header className="header" style={{ backgroundColor }}>
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <span className="header-nav__logo--text"><Link to="/" className="header-nav__logo--text--link">ARCHM Industries</Link></span>
                </div>
                <div className="header-nav-container">
                    <ul className="header-nav-container__list">
                        <li className="header-nav-container__list--item"><Link to="/" id={`${match.path === '/' ? 'link--active' : null}`} className="header-nav-container__list--item--link">Home</Link></li>
                        <li className="header-nav-container__list--item"><Link to="/about" id={`${match.path === '/about' ? 'link--active' : null}`} className="header-nav-container__list--item--link">About Us</Link></li>
                        <li className="header-nav-container__list--item"><Link to="/products" id={`${match.path === '/products' ? 'link--active' : null}`} className="header-nav-container__list--item--link">Products</Link></li>
                        <li className="header-nav-container__list--item"><Link to="/brands" id={`${match.path === '/brands' ? 'link--active' : null}`} className="header-nav-container__list--item--link">Brands</Link></li>
                        <li className="header-nav-container__list--item"><Link to="/services" id={`${match.path === '/services' ? 'link--active' : null}`} className="header-nav-container__list--item--link">Services</Link></li>
                        <li className="header-nav-container__list--item"><Link to="/contact" id={`${match.path === '/contact' ? 'link--active' : null}`} className="header-nav-container__list--item--link">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="header-progress__container fixed-top" style={{transition: "width .3s"}}>
                <span className="header-progress__container--bar" style={{width: `${width}`}}></span>
            </div>
        </header>
    )
}

export default withRouter(NavBar);