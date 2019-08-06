import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import './index.sass'

export const IndexPageTemplate = ({
  title
}) => (
  <div>
    {title}
  </div>
)

const Card = ({ title, children }) => (
  <div className="landing-card">
    <p className="text-bold">{title}</p>
    <div className="divider" />
    {children}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout landing={true}>
      <section className="landing-cover">
        <svg xmlns="http://www.w3.org/2000/svg" width="2013.346" height="691.917" viewBox="0 0 2013.346 691.917">
          <path id="Path_1" data-name="Path 1" d="M0,770.891s403.475-59.583,770.824,126.385S1703.049,1133.257,1917.87,1133.1s0,320.623,0,320.623H0Z" transform="translate(0 -761.803)" fill="#0330cf" opacity="0.567"/>
        </svg>
      </section>
      <section className="container contain-wide-text landing-general-info">
        <p>
        Coming into a new place to start a new adventure is as exciting as it is nerve-wrecking. Every one of us came to this lovely city of Delft with a specific purpose, yet we still hope to enjoy life on the side, making the best of each day we have in this city.</p>

        <p>We gladly welcome you to ISC, to make the best of the days together in Delft! We are a group of happy people, mostly students, who love God and love people.</p>

        <p>Our purpose is to create a loving community that international students can call second home while being away from their first home. Through our Sunday services and various activities, we bring students together, celebrate diversity, and strive to create peace by being in peace with ourselves and the people around us.</p>
      </section>
      <div className="card-scroll">
        <Card title="Daily Bible Reading">
          <p>{frontmatter.bibleReading}</p>
        </Card>
        <Card title="Daily Bible Reading">
          <p>{frontmatter.bibleReading}</p>
        </Card>
        <Card title="Song of the week">
          <div dangerouslySetInnerHTML={{__html: frontmatter.songOfTheWeek}} />
        </Card>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        bibleReading
        songOfTheWeek
      }
    }
  }
`
