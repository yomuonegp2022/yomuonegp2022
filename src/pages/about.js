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

const About = () => (
  <Layout title="概要">
    <Seo title="概要" />
    <menu>
      <h3 style={{padding: `.5rem 0 .5rem`, marginBottom: `.5rem`}}>目次</h3>
      <p><StLink to="#about">読ム-１とは</StLink></p>
      <p><StLink to="#logo">ロゴ</StLink></p>
      <p><StLink to="#manager">運営について</StLink></p>
      <p><StLink to="#members">運営メンバー</StLink></p>
      <p><StLink to="#past">過去の大会</StLink></p>
    </menu>
    <h1 class="anchor" id="about">読ム-１とは</h1>
    <p>
      <ruby>
        <rb>読ム-１</rb>
        <rp>（</rp>
        <rt>よむわん</rt>
        <rp>）</rp>
      </ruby>
      グランプリは、合成音声による漫才大会！
    </p>
    <p>ルールは簡単、</p>
    <p>
      <ul>
        <li>
          合成音声による、
        </li>
        <li>
          オリジナルの漫才を、
        </li>
        <li>
          1分～5分に収めて、
        </li>
      </ul>
    </p>
    <p>
      ニコニコに投稿！それだけ！（正確なルールは<StLink to="/rule">こちら</StLink>をご覧ください）
    </p>
    <p>
      そして、優勝者は参加者同士の投票で決定！互いに本気の漫才をぶつけ合い、屈服させた者が勝者となる、コンプラ無用のデスマッチだ！
    </p>
    <p>エントリー方法は<StLink to="/rule#entry">こちら</StLink></p>
    <h1 class="anchor" id="logo">ロゴ</h1>
    <p>製作：にじみこんいろ様（2018～2020年度運営）</p>
    <p>
      <div style={{maxwidth: `60%`}}>
      <a target="_blank" rel="noreferrer" title="読ム-1グランプリ ロゴ" href="https://seiga.nicovideo.jp/seiga/im7836885">
        <StaticImage
          src="../images/yomuone.png"
          width={240}
          formats={["auto", "webp", "avif"]}
          alt="読ム-１グランプリ ロゴ"
          style={{ marginBottom: `1.45rem`}}
        />
      </a>
      </div>
    </p>
    <p>
      アニメーションBB素材<br />
      （<a class="external" target="_blank" rel="noreferrer" title="ロゴBB" href="https://ux.getuploader.com/YOMU_1GP2018/download/7">専用アップローダー</a>
      からダウンロードしてご利用ください）
    </p>
    <p>
      <div style={{width: `60%`, maxWidth: `340px`}}>
        <div class="wrapper" style={{paddingBottom: `112.5%`}}>
          <iframe
            src="https://yomu1-2019.netlify.app/logo_BB.mp4"
            width="305"
            height="342"
            title="ロゴBB"
            allow="fullscreen; autoplay;"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
          />
        </div>
      </div>
    </p>
    <h1 class="anchor" id="manager">運営について</h1>
    <p>
      読ム-１グランプリ運営は、2021年度より立候補制をとっております。<br />
      開催年度によっては多少のルール変更がある場合もございますので、参加経験のある方もエントリー前に一度ルールをご確認ください。<br />
      （スケジュール等の基本ルールに変更はございません）
    </p>
    <p>
      また、立候補者がいない場合その年度は開催されませんので、ご興味のある方はぜひ積極的な立候補をお願いいたします！
    </p>
    <p>
      詳しくは、
      <a class="external" target="_blank" rel="noreferrer" title="読ム-1グランプリ（旧）からのお知らせ" href="https://www.nicovideo.jp/watch/sm36956086">
        <i class="fas fa-tv fa-fw"></i> 読ム-1グランプリ（旧）からのお知らせ
      </a>
      をご覧ください。
    </p>
    <p>
      また、
      <a class="external" target="_blank" rel="noreferrer" title="読ム-1グランプリ専用アップローダー" href="https://ux.getuploader.com/YOMU_1GP2018/">
        読ム-1グランプリ専用アップローダー
      </a>
      に今回の運営の引き継ぎ資料を用意させていただきましたので、ぜひご利用ください。
    </p>
    <h1 class="anchor" id="members">運営メンバー</h1>
    <p style={{lineHeight: `2`}}>
      <a class="external" target="_blank" rel="noreferrer" title="蝶番" href="https://twitter.com/ci_cei">
        <i class="fab fa-twitter fa-fw"></i>蝶番
      </a>（主催）<br />
      <a class="external" target="_blank" rel="noreferrer" title="俺の彼女" href="https://twitter.com/Kbrw0ipGea3xfXf">
        <i class="fab fa-twitter fa-fw"></i>俺の彼女
      </a>
    </p>
    <h1 class="anchor" id="past">他年度の大会</h1>
    <p>運営が同じ大会では一部リンクが共通しております。</p>
    <h3>2018年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2018年度特設サイト" href="https://yomu1.netlify.app/">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2018年度コミュニティ" href="https://com.nicovideo.jp/community/co3737919">
        <i class="fas fa-users fa-fw"></i>コミュニティ
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2018年度ニコニコ" href="https://www.nicovideo.jp/user/72128077">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2018年度twitter" href="https://twitter.com/Yomu_1GP">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2018年度マイリスト" href="https://www.nicovideo.jp/mylist/61478669">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h3>2019年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2019年度特設サイト" href="https://yomu1-2019.netlify.app/">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2019年度コミュニティ" href="https://com.nicovideo.jp/community/co3737919">
        <i class="fas fa-users fa-fw"></i>コミュニティ
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2019年度ニコニコ" href="https://www.nicovideo.jp/user/72128077">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2019年度twitter" href="https://twitter.com/Yomu_1GP">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2019年度マイリスト" href="https://www.nicovideo.jp/mylist/65165304">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h3>2020年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2020年度特設サイト" href="https://yomu1-2020.netlify.app/">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2020年度コミュニティ" href="https://com.nicovideo.jp/community/co3737919">
        <i class="fas fa-users fa-fw"></i>コミュニティ
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2020年度ニコニコ" href="https://www.nicovideo.jp/user/72128077">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2020年度twitter" href="https://twitter.com/Yomu_1GP">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2020年度マイリスト" href="https://www.nicovideo.jp/mylist/67940877">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h3>2021年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2021年度特設サイト" href="https://uguisumotiblog.fc2.net/blog-category-3.html">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2021年度ニコニコ" href="https://www.nicovideo.jp/user/116028483">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      {/*<a class="external" target="_blank" rel="noreferrer" title="2021年度twitter" href="https://twitter.com/Yomu1GP_2021">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />*/}
      <a class="external" target="_blank" rel="noreferrer" title="2021年度マイリスト" href="https://www.nicovideo.jp/mylist/70802564">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h3>2023年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2023年度特設サイト" href="https://yomu1-2023.netlify.app/">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2023年度ニコニコ" href="https://www.nicovideo.jp/user/126871155">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2023年度twitter" href="https://twitter.com/Yomu_1GP2023">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2023年度マイリスト" href="https://www.nicovideo.jp/mylist/74153670">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h3>2024年度</h3>
    <p>
      <a class="external" target="_blank" rel="noreferrer" title="2024年度特設サイト" href="https://yomu1-2024.netlify.app/">
        <i class="fas fa-pager fa-fw"></i>大会サイト
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2024年度ニコニコ" href="https://www.nicovideo.jp/user/126871155">
        <i class="fas fa-tv fa-fw"></i>ニコニコアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2024年度twitter" href="https://twitter.com/Yomu_1GP2023">
        <i class="fab fa-twitter fa-fw"></i>Twitterアカウント
      </a><br />
      <a class="external" target="_blank" rel="noreferrer" title="2024年度マイリスト" href="https://www.nicovideo.jp/mylist/76187044">
        <i class="fas fa-folder fa-fw"></i>マイリスト
      </a><br />
    </p>
    <h1 class="anchor" id="notice">旧運営からのお知らせ</h1>
    <p>旧運営のブロマガの内容の転載となります。（ユーザーブロマガは2021年10月にサービス終了）</p>
    <p>
      <ul>
        <li>
          <StLink to="/page1">2021年以降の読ム-１運営方針について</StLink>
        </li>
        <li>
          <StLink to="/page2">読ム-1グランプリ　テンプレート</StLink>
        </li>
      </ul>
    </p>
  </Layout>
)

export default About
