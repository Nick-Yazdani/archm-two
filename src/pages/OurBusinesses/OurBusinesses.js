import React, { useState, useEffect } from 'react';
import Brand from '../../components/Brand/Brand';

const OurBrands = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/business')
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }, [])

    return (
        <div className="business-grid">
        </div>
    )
}

export default OurBrands;