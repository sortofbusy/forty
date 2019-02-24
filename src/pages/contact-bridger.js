import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import pic1 from '../assets/images/cb-screenshots/ss1.png'
import pic2 from '../assets/images/cb-screenshots/ss2.png'
import pic3 from '../assets/images/cb-screenshots/ss3.png'

const ContactBridger = (props) => (
    <Layout>
        <Helmet>
            <title>Contact Bridger</title>
            <meta name="description" content="Contact Bridger" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact Bridger</h1>
                    </header>
                    <p>
                      <span className="image">
                        <a href='https://play.google.com/store/apps/details?id=com.sortofbusy.contactbridger&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank">
                          <img width="150" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
                        </a>
                      </span>
                      <span className="image">
                        <a style={{border: 'none'}} href='https://github.com/sortofbusy/contact-bridger' target="_blank">
                          <Img fixed={props.data.github.childImageSharp.fixed} />
                        </a>
                      </span>
                    </p>
                    <p>I created this simple app in 2016 as I was learning about React Native to help me with the repetitive task of importing contacts from
                      a list of form respondents on a Google Sheet. The app allows you to quickly and easily import contact information from a Google Sheet 
                      to your mobile device.
                    </p>
                    <p> Contact Bridger will intelligently scan your chosen Sheet's header row for important data, and let you choose 
                      which records to import. Once the contacts are imported, you can message or email them from the app, or import into your phone's contacts.
                    </p>
                    <p>Along the way, I learned a lot about the React Native ecosystem, integrating native Android modules, and the Google Play Store app 
                      release process.</p>
                    <h2>Features</h2>
                    <div id="gallery">
                      <div className="grid-wrapper slide slide1" >
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
                      <div className="grid-wrapper slide" >
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
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss3.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>Once a Google Sheet is selected, the app parses the column headers and suggests their correspondence to import fields.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>Once columns are defined, the data is viewed as cards representing contacts, and the user chooses which contacts to import.
                          </p>
                        </div>
                        <div className='col-4 feature-pic'>
                          <Img fixed={props.data.ss4.childImageSharp.fixed} />
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss6.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>The imported contacts are then stored in a searchable list.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>You can launch SMS or email intents for an individual contact.
                          </p>
                        </div>
                        <div className='col-4 feature-pic'>
                          <Img fixed={props.data.ss7.childImageSharp.fixed} />
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss8.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>The contacts saved in the app can also be imported into Google Contacts.
                          </p>
                        </div>
                      </div>
                      <hr />
                  </div>
                      <p>
                        <Link to="/contact-bridger-privacy-policy" className="link primary">Privacy Policy</Link>
                      </p>
                  
                </div>
            </section>
        </div>

    </Layout>
)



export default ContactBridger

// image formatting fragment
export const ssImage = graphql`
  fragment ssImage on File {
    childImageSharp {
      fixed(width: 220) {
         ...GatsbyImageSharpFixed
       }
     }
  }
`

export const query = graphql`
  query {
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

