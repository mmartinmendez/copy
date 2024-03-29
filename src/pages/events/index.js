import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container contain-wide-text text-bold">
          <div className="spacer-md" />
          <p>Throughout the year we have events planned other than the Sunday services we have at 11:30 every Sunday morning.</p>

          <p style={{paddingBottom: "700px"}}></p>
        </div>
      </Layout>
    )
  }
}

export const eventsPageQuery = graphql`
  query EventsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`