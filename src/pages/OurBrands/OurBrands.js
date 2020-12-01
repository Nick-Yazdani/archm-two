import React, { useState, useEffect } from 'react';
import Brand from '../../components/Brand/Brand';

const OurBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/brand')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setBrands(res)
            })
    }, [])

    return (
        <div className="brands-grid">
            {brands.length > 0 ? brands.map(brand => {
                return <Brand heading={brand.acf.name} alt="logo" excerpt={brand.acf.excerpt} image={brand.acf.image} />
            }) : null}
        </div>
    )
}

export default OurBrands;