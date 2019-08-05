import React from 'react'
import Layout from '../components//Layout'

const Community = ({ data }) => (
    <Layout>
        <p>{data.markdownRemark.frontmatter.title}</p>
        <p>{data.markdownRemark.frontmatter.info}</p>
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