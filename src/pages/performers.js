import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Performer from "../components/performer"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`

const Performers = () => {
  const data = useStaticQuery(graphql`
    query PerformerQuery {
      allPerformerJson {
        edges {
          node {
            name
            _id
            url
            comment
            movie
          }
        }
      }
    }
  `)

  const performers = data.allPerformerJson.edges
  return (
    <Layout title="参加者一覧">
      <Seo title="参加者一覧" />
      <p><StLink to="/rule#entry">エントリー受付中！</StLink></p>
      <div style={{counterReset: `number`}} />
      {performers.map(p =>
        <Performer
          name={p.node.name}
          _id={p.node._id}
          url={p.node.url}
          comment={p.node.comment}
          movie={p.node.movie}
        />
      )}
    </Layout>
  )
}

export default Performers