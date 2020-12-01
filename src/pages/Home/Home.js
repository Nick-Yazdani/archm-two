import React, { useState, useEffect, Fragment } from 'react';
import Loader from 'react-loader-spinner'

import Card from '../../components/Card/Card';

import { Link } from 'react-router-dom';

const Home = () => {
    const [firstSplashPage, setFirstSplashPage] = useState({});
    const [secondSplashPage, setSecondSplashPage] = useState({});
    const [cardSection, setCardSection] = useState({});
    const [cards, setCards] = useState([]);
    const [featureBox, setFeatureBox] = useState({});
    const [title, setTitle] = useState({});

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/splash-page/19')
            .then(res => res.json())
            .then(res => {
                setFirstSplashPage(res.acf)
                setTitle(res.title.rendered)
            })
    }, [])

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/splash-page/28')
            .then(res => res.json())
            .then(res => {
                setSecondSplashPage(res.acf)
            })
    }, [])

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/section/34')
            .then(res => res.json())
            .then(res => {
                setCardSection(res.acf)
            })
    }, [])

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/card')
            .then(res => res.json())
            .then(res => {
                setCards(res)
            })
    }, [])

    useEffect(() => {
        fetch('https://www.wpbuild.archm.com.au/wp-json/wp/v2/feature-box/53')
            .then(res => res.json())
            .then(res => {
                setFeatureBox(res.acf)
            })
    }, [])

    console.log(title)
    return (
        <Fragment>
            <section className="section-main">
                <div style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${firstSplashPage.img})`
                }} className="section-main__image">
                    <h1 className="section-main__heading">
                        <span className="section-main__heading--caption block">{firstSplashPage.img ? firstSplashPage.caption :
                            <Loader
                                type="Puff"
                                color="#F2F2F2"
                                height={100}
                                width={100}
                            />}</span>
                        <span className="section-main__heading--text block">{firstSplashPage.subtext}</span>
                        <Link to="#" className="btn btn--red" style={firstSplashPage.button ? null : { display: "none" }}>
                            {firstSplashPage.button}
                        </Link>
                    </h1>
                </div>
            </section>
            <section className="section-services">
                <h3 className="section-services__heading">
                    <span className="section-services__heading--caption block">{cardSection.caption}</span>
                    <span className="section-services__heading--text block">{cardSection.subtext}</span>
                </h3>
                <div className="section-services__container">
                    {cards.length > 1 ? cards.map(card => {
                        return (
                            <Card key={card.acf.caption} image={card.acf.image} alt={card.acf.alt} heading={card.acf.caption} text={card.acf.subtext} />
                        )
                    }) : null}
                </div>
            </section>
            <section className="section-middle">
                <div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${secondSplashPage.img})` }} className="section-middle__image">
                    <h3 className="section-middle__heading">
                        <span className="section-middle__heading--caption block">{secondSplashPage.caption}</span>
                        <span className="section-middle__heading--text block">{secondSplashPage.subtext}</span>
                    </h3>
                </div>
            </section>
            <section className="section-last">
                <div className="section-last__container">
                    <div className="section-last__container--column">
                        <ul className="section-last__container--column--list">
                            <li className="section-last__container--column--list--title">{featureBox.title}</li>
                            {featureBox.item ? featureBox.item.split(',').map(e => {
                                return (
                                    <li key={e} className="section-last__container--column--list--item">{e}</li>
                                )
                            }) : null}
                        </ul>
                        <Link to="#" className="btn btn--red" style={{ fontSize: "1.3rem" }}>{featureBox.buttonText}</Link>
                    </div>
                    <div className="section-last__container--column">
                        <img src={featureBox.image} className="section-last__container--column--image" alt="Another cool car engine" />
                        <span className="section-last__container--column--overlay">{featureBox.overlay}</span>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;