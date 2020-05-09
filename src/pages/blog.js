import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <small>{post.node.frontmatter.date}</small>
            <Link to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
            </Link>
            <p>{post.node.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            path
          }
        }
      }
    }
  }
`
