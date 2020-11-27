import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import CardImage from './images/card-image.jpg';
import ListImage from './images/cool-engine.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Layout>
            <section className="section-main">
                <div className="section-main__image">
                    <h1 className="section-main__heading">
                        <span className="section-main__heading--caption block">Lorem, ipsum dolor sit amet consectetur.</span>
                        <span className="section-main__heading--text block">Numquam omnis in vitae quae vero eum eos quibusdam maiores.</span>
                        <Link to="#" className="btn btn--red">
                            Learn More
                        </Link>
                    </h1>
                </div>
            </section>
            <section className="section-services">
                <h3 className="section-services__heading">
                    <span className="section-services__heading--caption block">Sit amet consectetur adipisicing elit.</span>
                    <span className="section-services__heading--text block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti quia repellat, pariatur id esse quae nisi.</span>
                </h3>
                <div className="section-services__container">
                    <Card image={CardImage} alt="Photo of an automobile engine" heading="Lorem ipsum dolor" text="Iste, asperiores nisi? Quaerat incidunt ullam veritatis repellendus odio quas eveniet fuga non, eligendi quidem, deserunt iste autem, explicabo sequi tempora eum!" />
                    <Card image={CardImage} alt="Photo of an automobile engine" heading="Lorem ipsum dolor" text="Iste, asperiores nisi? Quaerat incidunt ullam veritatis repellendus odio quas eveniet fuga non, eligendi quidem, deserunt iste autem, explicabo sequi tempora eum!" />
                    <Card image={CardImage} alt="Photo of an automobile engine" heading="Lorem ipsum dolor" text="Iste, asperiores nisi? Quaerat incidunt ullam veritatis repellendus odio quas eveniet fuga non, eligendi quidem, deserunt iste autem, explicabo sequi tempora eum!" />
                </div>
            </section>
            <section className="section-middle">
                <div className="section-middle__image">
                    <h3 className="section-middle__heading">
                        <span className="section-middle__heading--caption block">Adipisicing elit</span>
                        <span className="section-middle__heading--text block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quibusdam. Officia corrupti unde nulla voluptatibus quis, odit eveniet quam velit! Veritatis possimus iste eveniet nulla. Doloribus, tempora cupiditate! Eum, nam?</span>
                    </h3>
                </div>
            </section>
            <section className="section-last">
                <div className="section-last__container">
                    <div className="section-last__container--column w-50">
                        <ul className="section-last__container--column--list">
                            <li className="section-last__container--column--list--title">Title</li>
                            <li className="section-last__container--column--list--item">Item One</li>
                            <li className="section-last__container--column--list--item">Item Two</li>
                            <li className="section-last__container--column--list--item">Item Three</li>
                            <li className="section-last__container--column--list--item">Item Four</li>
                            <li className="section-last__container--column--list--item">Item Five</li>
                        </ul>
                        <Link to="#" className="btn btn--red" style={{fontSize: "1.3rem"}}>Read More</Link>
                    </div>
                    <div className="section-last__container--column w-50">
                        <img src={ListImage} className="section-last__container--column--image" alt="Another cool car engine" />
                        <span className="section-last__container--column--overlay">This is the text that will appear over the image when somebody hovers over it.</span>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home;