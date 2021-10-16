import * as React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { /*GatsbyImage, getImage,*/ StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

//import Performer from "../components/Performer"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`

const Performers = () => {
  /*const data = useStaticQuery(graphql`
  query PerformerQuery {
    allFile(filter: {childImageSharp: {original: {width: {eq: 150}}}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, formats: AUTO)
          }
        }
      }
    }
    allPerformerJson {
      edges {
        node {
          name
          url
          comment
          movie
        }
      }
    }
  }
`)

  const performers = data.allPerformerJson.edges
  const images = data.allFile.edges*/
  return(
    <Layout title="参加者一覧">
      <Seo title="参加者一覧" />
      <p>エントリー開始をお待ちください</p>
      <div style={{counterReset: `number`}} />
      {/*performers.map(p => {
        return (
        <div class="performer">
          <StaticImage
            src={`../images/${p.node.name}.png`}
            width={150}
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            alt={p.node.name}
          />
          <GatsbyImage image={image} />
          <div class="performer-items">
            <div class="performer-item-name">
              {p.node.name}
            </div>
            <a class="performer-item-url" href={`https://nicovideo.jp/user/${p.node.url}`}>
              user/{p.node.url}
            </a>
            <div class="performer-item-comment">
              {p.node.comment}
            </div>
            <a class="performer-item-movie" href={`https://nicovideo.jp/watch/${p.node.movie}`}>
              {p.node.movie}
            </a>
          </div>
        </div>
      )})*/}
      {/*<Performer
        name="2"
        id="yyy"
        comment="ga"
        movie="sm333"
      />*/}

      {/*template
      <div class="performer">
        <StaticImage class="performer-img"
          src="../images/yomuonesquare.png"
          width={150}
          layout="fixed"
          formats={["auto", "webp", "avif"]}
        />
        <StaticImage class="performer-img-sp"
          src="../images/yomuonesquare.png"
          width={50}
          layout="fixed"
          formats={["auto", "webp", "avif"]}
        />
        <div class="performer-items">
          <div class="performer-item-name">
            よむわん
          </div>
          <a class="performer-item-url" href={`https://nicovideo.jp/user/xx`}>
            user/xx
          </a>
          <div class="performer-item-comment">
            comment
          </div>
          <a class="performer-item-movie" href={`https://nicovideo.jp/watch/smxx`}>
            smxx
          </a>
        </div>
      </div>}
      */}
    </Layout>
  )
}

export default Performers