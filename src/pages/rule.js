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

const Rule = () => (
  <Layout title="大会ルール">
    <Seo title="大会ルール" />
    <menu>
      <p><StLink to="#entry">エントリー方法</StLink></p>
      <p><StLink to="#schedule">スケジュール</StLink></p>
      <p><StLink to="#work">応募作品のルール</StLink></p>
      <p><StLink to="#vote">投票のルール</StLink></p>
      <p><StLink to="#supplement">補足</StLink></p>
    </menu>
    <h1 class="anchor" id="entry">エントリー方法</h1>
    <p>読ム-１グランプリへの参加には、事前のエントリーが必要となります。</p>
    <p>エントリーの際には、</p>
    <p>
    <ol>
      <li>
        参加者名（ハンドルネームと別でも、チーム名等でも可）
      </li>
      <li>
        ニコニコユーザーID（またはTwitterユーザー名等）
      </li>
      <li>
        参加に向けて一言（意気込みなど、任意）
      </li>
    </ol>
    </p>
    <p>
      を添えて、次のいずれかの方法で参加表明を行ってください。
    </p>
    <p>
      <ul>
        <li>
          Twitterの「
          <a class="external" target="_blank" title="「#読ム_１_2022_参加表明」タグで検索" href="https://twitter.com/search?q=%23%E8%AA%AD%E3%83%A0_1_2022_%E5%8F%82%E5%8A%A0%E8%A1%A8%E6%98%8E">
            #読ム_１_2022_参加表明
          </a>
            」タグでつぶやく
        </li>
        <li>
          ニコニコ動画に「
          <a class="external" target="_blank" title="「読ム_１_2022_参加表明」タグで検索" href="https://www.nicovideo.jp/tag/%E8%AA%AD%E3%83%A0_1_2022_%E5%8F%82%E5%8A%A0%E8%A1%A8%E6%98%8E">
            読ム_１_2022_参加表明
          </a>
          」タグを固定した動画を投稿
        </li>
        <li>
          <a class="external" target="_blank" title="運営twitterへDM" href="https://twitter.com/messages/compose?recipient_id=1446805461521473547">
            <i class="fab fa-twitter fa-fw"></i>運営TwitterのDM
          </a>
          に送信
        </li>
        <li>
          <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
            <i class="fas fa-envelope fa-fw"></i>運営メールアドレス
          </a>
          に送信
        </li>
      </ul>
    </p>
    <p>
      運営が確認でき次第、エントリー完了となります。<br />
      <StLink to="/performers">参加者一覧</StLink>に登録後、返信やリツイート等で対応いたしますので、内容をご確認ください。
    </p>
    <p>
      なお、<i>応募作品は結果発表動画及び次回以降の運営の動画に使用する場合がございます</i>。（使用例は過去の運営の動画をご覧ください）<br />
      エントリー完了の時点でこのことにご同意いただけたものといたしますので、ご同意いただけない場合は、参加表明の際にその旨もお書き添えいただくか、参加表明後にお知らせください。
    </p>
    <h1 class="anchor" id="schedule">スケジュール</h1>
    <p>
      <table border="2" bordercolor="#444444" style={{whiteSpace: `nowrap`, maxWidth: `500px`}}>
        <tbody>
          <tr>
            <th>エントリー受付期間</th>
            <th>1月1日～3月10日</th>
          </tr>
          <tr>
            <th>応募作品の投稿</th>
            <th>4月1日</th>
          </tr>
          <tr>
            <th>投票期間</th>
            <th>4月2日～4月9日</th>
          </tr>
          <tr>
            <th>結果発表<sup>※</sup></th>
            <th>4月16日</th>
          </tr>
        </tbody>
      </table>
    </p>
    <p>
      <span style={{fontSize: `80%`}}>※動画にて行います。延期される可能性がございます。</span>
    </p>
    <h1 class="anchor" id="work">応募作品のルール</h1>
    <h3>1. <span style={{color: `#f59595`}}>合成音声</span>を使用する</h3>
    <p>
      合成音声、すなわち合成音声ソフトによる音声を含めてください。<br />
      ここでの合成音声ソフトとは、「自分で自由に喋らせたいセリフを設定できるソフトウェア、またはそれに類する機能」といたします。
    </p>
    <h3>2. <span style={{color: `#4488ff`}}>合成音声でない声</span>を使用しない</h3>
    <p>
      ソフトウェアに付属する追加音声素材（exVOICE等）や、ソフトウェアに予め収録されたフレーズ等も禁止といたします。
    </p>
    <p>
      例外として、「笑い声」「喧噪」の音声素材は利用可といたします。<br />
    </p>
    <h3>3. 内容は<span style={{color: `#f59595`}}>未公開かつオリジナルの漫才作品</span>とする</h3>
    <p>
      過去作品の再投稿や、既存の漫才等の再現は不可といたします。<br />
      ただし、再現を失格理由とするのは再現自体が作品の主体となっている場合のみであり、いわゆる版権作品のパロディ、話題としての引用、芸風を真似るなどに関しては、寛容に判定いたします。
    </p>
    <p>
      なお、<i>内容が漫才として認められるかどうかに関して、運営から指摘したり、失格理由とすることはありません</i>。<br />
      投票の際は、作品が漫才やコント、もといご自身の思う読ム-１という舞台にふさわしいと思えるかどうかも、判断基準としていただければと思います。<br />
      また、動画製作の際も、優勝を目指すことを意識して製作するようお願いいたします。
    </p>
    <h3>4. 動画時間は<span style={{color: `#f59595`}}>1分以上5分以内</span>とする</h3>
    <p>
      ニコニコに投稿した際の動画時間表示が、1:00～5:00に収まるようにしてください。
    </p>
    <h3>5. <span style={{color: `#4488ff`}}>他イベントとの同時参加</span>は禁止</h3>
    <h3>6. タグ「<span style={{color: `#f59595`}}>読ム-１_2022</span>」を固定する</h3>
    <p>
      “読ム-１”の“１”は全角ですのでご注意ください。<br />
      ハイフン、アンダーバー、2022は半角となります。<br />
      全角半角がややこしいので、ご心配な方は、この項の「読ム-１_2022」の文字をコピーしてご使用ください。
    </p>
    <h3>7. <span style={{color: `#f59595`}}>2022年4月1日</span>に投稿する</h3>
    <p>
      投稿日時が2022年4月1日00:00～2022年4月1日23:59に収まるように投稿してください。<br />
      タイマー公開、ライブ公開も可とします。
    </p>
    <p>
      また、非公開で投稿し投稿期間内に公開することも可とします。<br />
      この場合投稿日時の表記は非公開投稿時点のものとなりますので、運営側でも確認しますが、
      ニコレポの動画投稿通知を設定しておく等していただけますとありがたいです。
    </p>
    <h3>8. <span style={{color: `#f59595`}}>投票期間終了まで公開</span>のままにする</h3>
    <p style={{paddingTop: `2rem`}}>
      以上8項目となります。なお、最終的な失格の判断は運営が行いますのでご留意ください。
    </p>
    <p>
      また、ルールには含まれませんが、使用素材や使用ソフトの記載、コンテンツツリー登録もよろしくお願いいたします。
    </p>
    <p>
      ご不明な点のある方は、個別にお問い合わせください。
    </p>
    <h1 class="anchor" id="vote">投票のルール</h1>
    <p>参加者同士の投票で順位を決定し、上位入賞者を動画にて発表します。各参加者の投票先は開示されません。</p>
    <p>
      <ul>
        <li>
          投票期間内（4月2日00:00～4月9日23:59）に投票してください。
        </li>
        <li>
          各参加者には3票ずつ持ち票が与えられますので、その3票を自分の作品以外の作品に投票してください。<br />
          一つの作品に複数票投じることも可能です。
        </li>
        <li>
          投票することで、その参加者の作品にも1票投じられたものとして集計します。
        </li>
        <li>
          投票内容は、投票先・投票数が分かるように、
          <a class="external" target="_blank" title="運営twitterへDM" href="https://twitter.com/messages/compose?recipient_id=1446805461521473547">
            <i class="fab fa-twitter fa-fw"></i>運営TwitterのDM
          </a>
          か
          <a href="m&#97;i&#108;t&#111;:yom&#117;&#111;&#110;&#101;2&#48;&#50;&#50;&#64;&#103;&#109;a&#105;l&#46;&#99;om">
            <i class="fas fa-envelope fa-fw"></i>運営メールアドレス
          </a>
          に送信してください。
        </li>
        <li>
          投票期間内であれば、投票のやり直しも可能です。
        </li>
        <li>
          ルール違反が発生・発覚した場合、違反のあった参加者/作品は投票権/得票権を失います。<br />
          得票権のない作品への投票は無効票となりますのでご注意ください。
        </li>
      </ul>
    </p>
    <h1 class="anchor" id="supplement">補足</h1>
    <p>
      <ul>
        <li>
          一参加者（チーム）で複数の作品を応募することができます。
          <ul>
            <li>
              各作品でルールを守るようにしてください。<br />
              いずれかでルール違反があった場合、投票権と全ての作品の得票権が失われます。
            </li>
            <li>
              応募作品数に関係なく持ち票は3票となります。<br />
              投票することで、各作品に1票ずつ投じられたものとして集計します。
            </li>
            <li>
              投票は参加者ではなく作品を対象として行いますので、他参加者はご注意ください。
            </li>
          </ul>
        </li>
      </ul>
    </p>
    <p>
      ルールに関するご質問は、
      <a class="external" target="_blank" title="twitter" href="https://twitter.com/Yomu_1GP2022">
        <i class="fab fa-twitter fa-fw"></i>運営Twitter
      </a>
      か
      <a class="external" target="_blank" title="peing" href="https://peing.net/ja/yomu_1gp2022">
        <i class="fas fa-box-open fa-fw"></i>質問箱
      </a>
      までお願いいたします。
    </p>
  </Layout>
)

export default Rule