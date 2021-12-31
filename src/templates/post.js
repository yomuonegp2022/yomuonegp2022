import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function Post({ pageContext }) {
  const { node, next, prev } = pageContext
  const { frontmatter, html } = node
  return (
    <Layout title={frontmatter.title}>
      <Seo title={frontmatter.title} />
			<h4>{frontmatter.date}</h4>
			<div dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{paddingBottom: `2rem`}}><Link to="/#updates">←更新情報へ戻る</Link></div>
      {next && (
        <Link to={next.fields.slug}>
          <div class="article" style={{ marginLeft: `2rem` }}>
            <h3 style={{ padding: 0, marginBottom: `.2rem` }}>
              {next.frontmatter.title}
            </h3>
            <div style={{ textAlign: `right` }}>{next.frontmatter.date}</div>
          </div>
        </Link>
      )}
      {prev && ( <Link to={prev.fields.slug}>
          <div class="article" style={{ marginRight: `2rem` }}>
            <h3 style={{ padding: 0, marginBottom: `.2rem` }}>
              {prev.frontmatter.title}
            </h3>
            <div style={{ textAlign: `right` }}>{prev.frontmatter.date}</div>
          </div>
        </Link>
      )}
    </Layout>
  )
}