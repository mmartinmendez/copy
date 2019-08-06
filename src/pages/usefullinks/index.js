import React from "react";
import Layout from "../../components/Layout";
import { graphql } from 'gatsby'

import './usefullinks.sass'

const LinkDisplay = ({ link }) => (
    <div className="link-container">
        <a href={`https://${link.title}`} target="__blank" className="text-bold">{link.title}</a>
        <p className="text-bold">{link.description}</p>
    </div>
)

class UsefulLinks extends React.Component {
  render() {
    const links = this.props.data.allMarkdownRemark.edges
    return (
        <Layout>
            <div className="container contain-wide-text">
                <div className="spacer-md" />
                {links.map(link => <LinkDisplay link={link.node.frontmatter} />)}
            </div>
        </Layout>
    )
  }
}

export default UsefulLinks;

export const UsefullinksPageQuery = graphql`
  query UsefulLinksQuery {
    allMarkdownRemark(
      filter: { frontmatter: { findKey: { eq: "usefullinks" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
