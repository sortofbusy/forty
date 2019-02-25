import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Josiah Vinson"
                    meta={[
                        { name: 'description', content: 'projects' },
                        { name: 'keywords', content: 'MEAN, React, React Native, serverless' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Contact Bridger</h3>
                                <p>Android app that imports contacts from a Google Sheet</p>
                            </header>
                            <Link to="/contact-bridger" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Eat the Bible</h3>
                                <p>Serverless Bible reading management site with highly customizable plans and note-taking capabilities</p>
                            </header>
                            <Link to="/eat-the-bible" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Northwest Training</h3>
                                <p>MEAN stack event registration and management site</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Quikitech.com <span className="icon fa fa-external-link"></span></h3>
                                <p>Wordpress/WooCommerce</p>
                            </header>
                            <a href="https://quikitech.com" className="link primary"></a>
                        </article>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex