import * as React from "react"
import { Link } from "gatsby"
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
    <Seo />
    <p>動画埋め込みテスト</p>
    <p>
      <div style={{width: `100%`}}>
        <div class="wrapper" style={{paddingBottom: `56.25%`}}>
          <iframe allowfullscreen="allowfullscreen" allow="autoplay" src="https://embed.nicovideo.jp/watch/sm36956086?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1" style={{position: `absolute`, width: `100%`, height: `100%`, border: `none`,}}></iframe>
        </div>
      </div>
    </p>
    <h1>メニュー</h1>
    <h3><StLink to="/about">概要　<span style={{fontSize: `70%`}}>まずはこちらをご覧ください</span></StLink></h3>
    <h3><StLink to="/rule">ルール　<span style={{fontSize: `70%`}}>参加予定の方はこちら</span></StLink></h3>
    <h1>過去大会マイリスト</h1>
    <p>
      <a class="external" target="_blank" title="2018" href="https://www.nicovideo.jp/mylist/61478669">
        2018年度
      </a>
    </p>
    <p>
      <a class="external" target="_blank" title="2018" href="https://www.nicovideo.jp/mylist/65165304">
        2019年度
      </a>
    </p>
    <p>
      <a class="external" target="_blank" title="2018" href="https://www.nicovideo.jp/mylist/67940877">
        2020年度
      </a>
    </p>
    <p>
      <a class="external" target="_blank" title="2018" href="https://www.nicovideo.jp/mylist/70802564">
        2021年度
      </a>
    </p>
    <h1>運営リンク</h1>
    <p>
      <a class="external" target="_blank" title="niconico" href="https://www.nicovideo.jp/user/121301564">
        <i class="fas fa-tv fa-fw"></i>大会ニコニコアカウント
      </a>
    </p>
    <p>
      <a class="external" target="_blank" title="twitter" href="https://twitter.com/Yomu_1GP2022">
        <i class="fab fa-twitter fa-fw"></i>大会Twitterアカウント
      </a>
    </p>
    <p>
      <a class="external" target="_blank" title="peing" href="https://peing.net/ja/yomu_1gp2022">
        <i class="fas fa-box-open fa-fw"></i>大会質問箱
      </a>
    </p>
    <p>
      <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
        <i class="fas fa-envelope fa-fw"></i>運営メールアドレス
      </a>
    </p>
  </Layout>
)

export default IndexPage
