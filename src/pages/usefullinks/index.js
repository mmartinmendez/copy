import React from "react";
import Layout from "../../components/Layout";
// import { graphql } from 'gatsby'

class UsefulLinks extends React.Component {
  render() {
    console.log(this.props.data)
    return <Layout></Layout>;
  }
}

export default UsefulLinks;

// export const UsefullinksPageQuery = graphql`
//   query UsefulLinksQuery {
//     allMarkdownRemark(filter: { frontmatter: { findKey: { e: usefullinks } } }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
