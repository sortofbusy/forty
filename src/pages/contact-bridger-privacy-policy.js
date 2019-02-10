import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import feature_pic from '../assets/images/feature.png'

const ContactBridgerPrivacyPolicy = (props) => (
    <Layout>
        <Helmet>
            <title>Contact Bridger Privacy Policy</title>
            <meta name="description" content="Contact Bridger Privacy Policy" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact Bridger Privacy Policy</h1>
                    </header>
                    <p>This app allows you to access and update your Google Drive using your Google Account login, but does not transmit any data to the developer or any other party.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ContactBridgerPrivacyPolicy