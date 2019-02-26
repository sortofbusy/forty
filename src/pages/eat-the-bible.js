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
            <title>Josiah Vinson | Eat The Bible</title>
            <meta name="description" content="Eat the Bible Bible reading site" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner" id="gallery-container">
                    <header className="major">
                        <h1>Eat the Bible</h1>
                    </header>
                    <p>
                      <a href='https://eatthebible.com' target="_blank" className="heading-link">
                        https://eatthebible.com <span className="icon fa fa-external-link"></span>
                      </a>
                      <a href="https://github.com/sortofbusy/eatthebible-firebase" target="blank" className="heading-link">
                        View source on Github <span className="icon fa fa-external-link"></span>
                      </a>
                      
                    </p>
                    <p>Eat the Bible helps users manage Bible reading schedules. It allows you the flexibility to keep track of multiple reading plans.
                       You could read the New Testament in Greek while reading Joshua through Isaiah in Dutch; it's up to you! 
                    </p>
                    <p>
                      During the summer of 2015, I decided to jump into the world of Node.js and asynchronous design patterns after years of LAMP-stack programming. 
                      I focused on the <strong>MEAN</strong> stack (<strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>A</strong>ngularJS, and <strong>N</strong>ode),
                      and created a mobile-first, responsive single-page application that would support Google, Facebook, or password authentication.
                    </p>
                    <p>After several weeks of staring in disbelief at the increasing number of callbacks, I had doubts about the whole endeavor, but eventually I started
                      to understand the possibilities opened up by a new kind of programming. It wasn't until the next summer, when I started learning about the React framework,
                      that things started to fall into place. I rewrote the entire application to work with Google Firebase's Realtime Database, hosted it on Firebase, and prepared
                      to use my new codebase to create React Native apps for the project (in progress). 
                    </p>
                      <h2>Features <i style={{float: 'right', paddingTop: '.4em'}} className="fa fa-angle-double-right mobile-only"/></h2>
                    <div id="gallery">
                      <div className="grid-wrapper slide slide1" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss1.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>The first challenge was implementing login using social or local authentication. I tried to follow Material Design specifications as much as possible.
                          </p>
                        </div>
                        
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>The core of the application logic involves creating and implementing plans, all synced in real-time with Firebase listeners.
                             I created a number of default plans to get started.
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
                          <p>I created the capacity to create custom reading plans. This made for a lot of interesting edge-case validation issues, and required writing my own
                            reference library to parse Bible ranges.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>Since I was going to use this myself, having the ability to choose a darker color scheme and modify text size was very important.
                          </p>
                        </div>
                        <div className='col-4 feature-pic'>
                          <Img fixed={props.data.ss4.childImageSharp.fixed} />
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss5.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>I tried to keep layout as simple and intuitive as possible.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>Custom notes can be attached to a verse, and are saved with the original text for reference.
                          </p>
                        </div>
                        <div className='col-4 feature-pic'>
                          <Img fixed={props.data.ss6.childImageSharp.fixed} />
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss7.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>The core of the reading experience. I considered using a floating action button, but found that it clumsy in practice.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-8 feature-text'>
                          <p>Buttons at the top allow for quick navigation between different plans, or enabling note-taking mode.
                          </p>
                        </div>
                        <div className='col-4 feature-pic'>
                          <Img fixed={props.data.ss8.childImageSharp.fixed} />
                        </div>
                      </div>
                      <hr />
                      <div className="grid-wrapper slide" >
                        <div className='col-4 feature-pic'>
                        <Img fixed={props.data.ss9.childImageSharp.fixed} />
                        </div>
                        <div className='col-8 feature-text'>
                          <p>This note-taking area should be improved - the modal approach seems very outdated now.
                          </p>
                        </div>
                      </div>
                  </div>
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

