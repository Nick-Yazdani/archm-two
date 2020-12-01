import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <section className="section-about">
                <div className="section-about__overlay">
                    <h1 className="section-about__overlay--heading">
                        <span className="section-about__overlay--heading-caption block">About Us</span>
                        <span className="section-about__overlay--heading-subtext block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque culpa id voluptatibus temporibus illo exercitationem sequi praesentium! Nam aut, laborum nesciunt fugiat similique repellendus atque odit deleniti ipsum at!</span>
                    </h1>
                </div>
            </section>
            <section className="section-details">
                <div className="section-details__container">
                    <h3 className="section-details__container--heading">
                        Catchy Caption
                    </h3>
                    <p className="section-details__container--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi, modi, nam vitae ipsam ea in quod atque nulla voluptas enim. Quidem placeat eum dolorum animi voluptas eos architecto excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi error. Vitae cupiditate ipsum quas fuga laboriosam voluptatibus libero, quisquam obcaecati neque, excepturi repudiandae, ut quia eius debitis! Iste, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, enim maxime? Quas quis obcaecati consectetur asperiores fugit blanditiis odit porro expedita ad ratione! Repellendus dolor architecto delectus? Esse, pariatur sequi?</p>
                </div>
            </section>
        </Fragment>
    )
}

export default About;