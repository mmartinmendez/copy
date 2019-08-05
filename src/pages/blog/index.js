import React from 'react'

import Layout from '../../components/Layout'
import Content from '../../components/Content'

import './blog.sass'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container blog-description">
          <p>Our community is ever changing. There are always fresh faces. The newcomers in Delft mostly need information on using their time more efficiently and access to critical information. We provide some information here so that your stay is a little bit more comfortable.</p>

          <p style={{paddingBottom: "700px"}}>If you want to contribute towards growing this resource page <a href="#url">contact us</a>. </p>
        </div>
      </Layout>
    )
  }
}
