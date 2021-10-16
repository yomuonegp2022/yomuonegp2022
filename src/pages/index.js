import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`

/*const ExLink = styled(StLink)`
  &::after {
  margin: 0 0 0 3px;
  font-family: "Font Awesome 5 Free";
  content: '\f35d';
  font-weight: 900;
  }
`*/

const IndexPage = () => (
  <Layout title="ホーム">
    <Seo title="ホーム" />
    <p>準備中</p>
    <h1>運営リンク</h1>
    <p>
      <a class="external" title="niconico" href="https://www.nicovideo.jp/user/121301564">
        <i class="fas fa-tv"></i> 大会ニコニコアカウント
      </a>
    </p>
    <p>
      <a class="external" title="twitter" href="https://twitter.com/Yomu_1GP2022">
        <i class="fab fa-twitter"></i> 大会ツイッターアカウント
      </a>
    </p>
    <p>
      <a class="external" title="peing" href="https://peing.net/Yomu_1GP2022">
        <i class="fas fa-box-open"></i> 大会質問箱
      </a>
    </p>
    <p>
      <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
        <i class="fas fa-envelope"></i> 運営メールアドレス
      </a>
    </p>
  </Layout>
)

export default IndexPage
