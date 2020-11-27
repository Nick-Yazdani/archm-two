import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column w-50">
                        <div className="footer-column__title">
                            <h5 className="footer-column__title--caption"><Link className="footer-column__title--caption--link" to="/">ARCHM Industries</Link></h5>
                            <span className="footer-column__title--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorem. Sequi quisquam corrupti soluta, ducimus deserunt natus, cum illum inventore debitis fuga autem, impedit quas ipsum eos odit totam alias!</span>
                        </div>
                    </div>
                    <div className="footer-column w-20">
                        <ul className="footer-column__list">
                            <li className="footer-column__list--title">About Us</li>
                            <li className="footer-column__list--item"><Link to="/about" className="footer-column__list--item--link">About Us</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Our Work</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Career</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column w-20">
                        <ul className="footer-column__list">
                            <li className="footer-column__list--title">Services</li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Hello</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Free</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Jard</Link></li>
                            <li className="footer-column__list--item"><Link to="#" className="footer-column__list--item--link">Elma</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column w-20">
                        <ul className="footer-column__list">
                            <li className="footer-column__list--title">Contact</li>
                            <li className="footer-column__list--item">28 Jersey Rd, Bayswater, VIC 3153</li>
                            <li className="footer-column__list--item">sales@archm.com.au</li>
                            <li className="footer-column__list--item">(03) 9821 7834</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;