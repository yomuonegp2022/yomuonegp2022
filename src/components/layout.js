/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import Menu from "./Menu"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
  textdecoration: none;
`
const SMenu = styled(Menu)`
  @media screen and (min-width: 960px) {
    display: none;
  };
`

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SMenu right width={200} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        class="under"
        style={{
          //textAlign: `center`,
          width: '100%',
          maxWidth: '1280px',
          padding: `0`,
        }}
      >
        <section>
          <aside class={title === `ホーム` ? `` : `hide`}>
            <p />
            <StLink to="/">
            <StaticImage
              src="../images/yomuonesquare.png"
              width={150}
              formats={["auto", "webp", "avif"]}
              alt="読ム-１グランプリ ロゴ"
              style={{ marginBottom: `1.45rem`, borderRadius: `50%`, }}
            />
            </StLink>
            <h4>合成音声漫才大会</h4>
            <h1 style={{ fontSize: `150%` }}>読ム-１グランプリ</h1>
            <table border="2" bordercolor="#444444">
              <tbody>
                <tr><th><StLink to="/about">エントリー<br />2022/01/01 - 2022/03/10</StLink></th></tr>
                <tr><th>開催<br />2022/04/01</th></tr>
                <tr><th>投票<br />2022/04/02 - 2022/04/09</th></tr>
                <tr><th>結果発表<br />2022/04/16</th></tr>
              </tbody>
            </table>
          </aside>
          <main>
            <article style={{
              paddingTop: `1.5rem`,
              paddingBottom: `0`,
            }}>
              <h1 style={{
                paddingBottom: `0.5rem`,
                color: `white`
                }}> {title} </h1>
            </article>
            <article style={{paddingTop: `2rem`}}>
              {children}
            </article>
          </main>
          <div style={{width: `100%`}} />
          <aside>
            <h2>
              <a title="niconico" href="https://www.nicovideo.jp/user/121301564">
                <i class="fas fa-tv"></i>
              </a>
              　　
              <a title="twitter" href="https://twitter.com/Yomu_1GP2022">
                <i class="fab fa-twitter"></i>
              </a>
              　　
              <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
                <i class="fas fa-envelope"></i>
              </a>
            </h2>
          </aside>
        </section>
        <footer
          style={{
            margin: `2rem`,
            textAlign: `center`,
          }}
        >
          © {new Date().getFullYear()} 読ム-１グランプリ, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
