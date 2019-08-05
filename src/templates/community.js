import React from 'react'
import Layout from '../components//Layout'

import './community.sass'

const Community = ({ data }) => (
    <Layout>
        <div className="container contain-wide-text text-bold blog-description">
          <div className="spacer-md" />
          <p>{data.markdownRemark.frontmatter.title}</p>
          <p style={{paddingBottom: "700px"}}>{data.markdownRemark.frontmatter.info}</p>
        </div>
    </Layout>
)

export default Community

export const communityPageQuery = graphql`
  query CommunityPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info
      }
    }
  }
`