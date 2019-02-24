import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import logo from '../assets/images/eatthebible/logo.png'

const EatTheBible = (props) => (
    <Layout>
        <Helmet>
            <title>Eat The Bible</title>
            <meta name="description" content="Eat the Bible Bible reading site" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Eat the Bible</h1>
                    </header>
                    <div className="feature-text" >
                      <a href='https://eatthebible.com' target="_blank">
                        <strong>https://eatthebible.com</strong>
                      </a>
                    
                      <span className="image">
                        <a style={{border: 'none', paddingLeft: 30}} href='https://github.com/sortofbusy/eatthebible' target="_blank">
                          <Img fixed={props.data.github.childImageSharp.fixed} />
                        </a>
                      </span>
                    </div>
                    <p>Eat the Bible helps users manage Bible reading schedules. It allows you the flexibility to keep track of multiple reading plans.
                       You could read the New Testament in Greek while reading Joshua through Isaiah in Dutch; it's up to you! 
                    </p>
                    <p>
                      Originally written in the summer of 2015 using the MEAN stack (<strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>A</strong>ngularJS, and <strong>N</strong>ode).
                    </p>
                    <p>Along the way, I learned a lot about the React Native ecosystem, integrating native Android modules, and the Google Play Store app 
                      release process.</p>
                    <h2>Features</h2>
                    <div className="grid-wrapper" >
                      <div className='col-4 feature-pic'>
                      <Img fixed={props.data.ss1.childImageSharp.fixed} />
                      </div>
                      <div className='col-8 feature-text'>
                        <p>This was my first project using React Native. The first challenge was working through the Google Signin flow to get authorization in the proper scopes,
                           which meant getting very familiar with <a href='https://github.com/react-native-community/react-native-google-signin' target='_blank'>React Native Google Signin</a>,
                          a package that's become a lot more stable since then.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-8 feature-text'>
                        <p>Next, to choose a Sheet using the Google Drive picker interface, I wrote a native Android module that would emit the result to the React Native thread.
                          There weren't any React Native packages for this at the time.
                        </p>
                      </div>
                      <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss2.childImageSharp.fixed} />
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-4 feature-pic'>
                      <Img fixed={props.data.ss3.childImageSharp.fixed} />
                      </div>
                      <div className='col-8 feature-text'>
                        <p>Once a Google Sheet is selected, the app parses the column headers and suggests their correspondence to import fields.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-8 feature-text'>
                        <p>Once columns are defined, the data is viewed as cards representing contacts, and the user chooses which contacts to import.
                        </p>
                      </div>
                      <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss4.childImageSharp.fixed} />
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-4 feature-pic'>
                      <Img fixed={props.data.ss6.childImageSharp.fixed} />
                      </div>
                      <div className='col-8 feature-text'>
                        <p>The imported contacts are then stored in a searchable list.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-8 feature-text'>
                        <p>You can launch SMS or email intents for an individual contact.
                        </p>
                      </div>
                      <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss7.childImageSharp.fixed} />
                      </div>
                    </div>
                    <hr />
                    <div className="grid-wrapper" >
                      <div className='col-4 feature-pic'>
                      <Img fixed={props.data.ss8.childImageSharp.fixed} />
                      </div>
                      <div className='col-8 feature-text'>
                        <p>The contacts saved in the app can also be imported into Google Contacts.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p>
                      <Link to="/contact-bridger-privacy-policy" className="link primary">Privacy Policy</Link>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)



export default EatTheBible

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "eatthebible/logo.png" }) {
      childImageSharp {
        fixed(width: 150) {
           ...GatsbyImageSharpFixed
         }
       }
    }
    github: file(relativePath: { eq: "GitHub_Logo_White.png" }) {
      childImageSharp {
        fixed(width: 150) {
           ...GatsbyImageSharpFixed
         }
       }
    }
    ss1: file(relativePath: { eq: "cb-screenshots/ss1.png" }) {
      ...ssImage
    }
    ss2: file(relativePath: { eq: "cb-screenshots/ss2.png" }) {
      ...ssImage
    }
    ss3: file(relativePath: { eq: "cb-screenshots/ss3.png" }) {
      ...ssImage
    }
    ss4: file(relativePath: { eq: "cb-screenshots/ss4.png" }) {
      ...ssImage
    }
    ss5: file(relativePath: { eq: "cb-screenshots/ss5.png" }) {
      ...ssImage
    }
    ss6: file(relativePath: { eq: "cb-screenshots/ss6.png" }) {
      ...ssImage
    }
    ss7: file(relativePath: { eq: "cb-screenshots/ss7.png" }) {
      ...ssImage
    }
    ss8: file(relativePath: { eq: "cb-screenshots/ss8.png" }) {
      ...ssImage
    }
  }
`

