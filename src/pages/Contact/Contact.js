import React from 'react';
import Layout from '../../components/Layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <section className="contact-section">
                <div className="contact-section-container">
                    <div className="contact-section-container__sub">
                        <h3 className="contact-section-container__sub--heading">
                            Contact
                    </h3>
                        <div className="contact-section-container__sub--iframe">
                            <iframe title="archm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.795228816169!2d145.2767386159049!3d-37.841679443415394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63b0dac739655%3A0xbff9bc8d76cf06a8!2s28%20Jersey%20Rd%2C%20Bayswater%20VIC%203153!5e0!3m2!1sen!2sau!4v1606362189479!5m2!1sen!2sau" width="800" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>

                        <div className="contact-section-container__sub__form">
                            <h3 className="contact-section-container__sub__form--heading">Send us a message:</h3>
                            <form className="contact-section-container__sub__form--form">
                                <div className="contact-section-container__sub__form--input-control">
                                    <label htmlFor="name" style={{ display: "none" }}>Name</label>
                                    <input id="name" type="text" name="name" placeholder="Name" className="contact-section-container__sub__form--input-control--input w-100" />
                                    <label htmlFor="email" style={{ display: "none" }}>Email</label>
                                    <input id="email" type="email" name="email" placeholder="Email" className="contact-section-container__sub__form--input-control--input w-100" />
                                    <label htmlFor="number" style={{ display: "none" }}>Number</label>
                                    <input id="number" type="text" name="number" placeholder="Phone Number" className="contact-section-container__sub__form--input-control--input w-100" />
                                </div>
                                <div className="contact-section-container__sub__form--input-control">
                                    <label htmlFor="message" style={{ display: "none" }}>Message</label>
                                    <textarea id="message" placeholder="Message" name="message" className="contact-section-container__sub__form--input-control--textarea w-100"></textarea>
                                </div>
                                <div className="contact-section-container__sub__form--btn-control w-100">
                                    <button type="submit" className="btn btn--red contact-section-container__sub__form--btn-control--button">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact;