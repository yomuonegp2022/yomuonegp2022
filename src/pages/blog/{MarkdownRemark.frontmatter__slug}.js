import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

export default function BlogPost({
  data,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <Seo title={frontmatter.title} />
			<h4>{frontmatter.date}</h4>
			<div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/#updates">←更新情報へ戻る</Link>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`