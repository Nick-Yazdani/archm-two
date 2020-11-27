import React from 'react';
import NavBar from '../Layout/NavBar/NavBar';
import Footer from '../Layout/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
              {children}
            <Footer />
        </div>
    )
}

export default Layout;