import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import logo from '../assets/images/eatthebible/logo.png'

const NorthwestTraining = (props) => (
    <Layout>
        <Helmet>
            <title>Josiah Vinson | Northwest Training</title>
            <meta name="description" content="Northwest Training registration and support site" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner" id="gallery-container">
                    <header className="major">
                        <h1>Northwest Training</h1>
                    </header>
                    <p>
                      <a href="#">Formerly hosted at https://nwtraining.us</a>
                      <a href="https://github.com/sortofbusy/nwtrainingus" target="blank" className="heading-link">
                        View source on Github <span className="icon fa fa-external-link"></span>
                      </a>
                      
                    </p>
                    <p>This site, now inactive was used to provide event registration and support services for a 1-year program used by over 220 participants.
                       It's a mobile-first MEAN stack single-page application featuring:
                       </p>
                    <ul>
                      <li>Registration flow with signature capture</li>
                      <li>Multiple levels of user roles</li>
                      <li>Attendance tracking</li>
                      <li>Resource management (text and audio files)</li>
                    </ul> 
                </div>
            </section>
        </div>

    </Layout>
)



export default NorthwestTraining

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "eatthebible/logo.png" }) {
      childImageSharp {
        fixed(width: 150) {
           ...GatsbyImageSharpFixed
         }
       }
    }

    ss1: file(relativePath: { eq: "eatthebible/ss1.png" }) {
      ...ssImage
    }
    ss2: file(relativePath: { eq: "eatthebible/ss2.png" }) {
      ...ssImage
    }
    ss3: file(relativePath: { eq: "eatthebible/ss3.png" }) {
      ...ssImage
    }
    ss4: file(relativePath: { eq: "eatthebible/ss4.png" }) {
      ...ssImage
    }
    ss5: file(relativePath: { eq: "eatthebible/ss5.png" }) {
      ...ssImage
    }
    ss6: file(relativePath: { eq: "eatthebible/ss6.png" }) {
      ...ssImage
    }
    ss7: file(relativePath: { eq: "eatthebible/ss7.png" }) {
      ...ssImage
    }
    ss8: file(relativePath: { eq: "eatthebible/ss8.png" }) {
      ...ssImage
    }
    ss9: file(relativePath: { eq: "eatthebible/ss9.png" }) {
      ...ssImage
    }
  }
`

