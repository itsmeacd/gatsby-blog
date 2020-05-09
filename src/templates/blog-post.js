import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="blog-post" />
      <small>{post.frontmatter.date}</small>
      <h1>{post.frontmatter.title}</h1>
      <h4>{post.frontmatter.description}</h4>
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPost
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
