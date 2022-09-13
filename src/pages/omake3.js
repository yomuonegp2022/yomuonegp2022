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
const Omake3 = () => (
  <Layout title="運営感想 - サイトについて2">
    <Seo title="運営感想 - サイトについて2" />
    <StLink to="/omake">←運営感想トップに戻る</StLink>
    <p></p>
    <menu>
      <h3 style={{padding: `.5rem 0 .2rem`, marginBottom: `.2rem`}}>目次</h3>
      <p style={{padding: `.2rem 0 .1rem`, margin: `.2rem .3rem .1rem`}}><StLink to="/omake2">前ページ</StLink></p>
      <p><StLink to="/omake2#copy">サイトのコピー</StLink></p>
      <p style={{marginBottom: `1.5rem`}}><StLink to="/omake2#mod">サイト情報の書き換え</StLink></p>
      <p><StLink to="#performers">参加者一覧の書き換え</StLink></p>
      <p><StLink to="#blog">更新情報の書き換え</StLink></p>
      <p><StLink to="#others">その他</StLink></p>
    </menu>
    <h2 class="anchor" id="performers">参加者一覧の書き換え</h2>
    <p><StLink to="/omake1">はじめに</StLink>でも述べたように、エントリーの受付はちょっぴり手間な仕事ですが、参加者としては受理されたことをなるたけ早く確認したい…かと思うので、そこに気を遣うなら参加者一覧の更新は頻繁に行うことになります。そのため、参加者一覧だけは簡単に更新できるよう工夫してあります。そんなに簡単になってないという説もあります。</p>
    <p><StaticImage src="../images/omake/omake3-00.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>参加者一覧のページは/src/pages/performersですが、表示する情報の本体は/src/components/performer.jsonにあります。</p>
    <p><StaticImage src="../images/omake/omake3-01.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>中身はサンプルに書き換え済み。各項目について説明します。ほぼそのまんまですが。</p>
    <p>
      <ul>
        <li>
          name: もちろん参加者名を入れます。
        </li>
        <li>
          _id: ニコニコアカウントのID（数字の部分のみ）を入れます。参加者一覧にはユーザーページのリンクが表示されます。
        </li>
        <li>
          url: ニコニコIDの代わりに別のサービスのアカウント等をもらっている場合は、ここに（URL全文を）入れます。
        </li>
        <li>
          comment: コメントを入れます。<i>改行は&lt;br&gt;に置き換える必要がある</i>ことに注意。というか生のhtmlが入るので、実は多少の無茶振りにも対応できます。
        </li>
        <li>
          movie: 大会当日、動画が投稿されたらID（sm含む）をここに入れましょう。それまでは空白で。（[""]でも[]でもOK）
        </li>
      </ul>
    </p>
    <p>空白の項目が2つあるのは、「空白に新しい参加者の情報を追加→空白項目をコピー」という流れでスムーズに追加を行うためです。「空白コピーを忘れて参加者情報を追加して空白を埋めてしまった」ということにならないのがポイント。</p>
    <p>参加者一覧にはもういくつか大事な要素があります。エントリーナンバーとアイコン画像です。</p>
    <p>
      <ul>
        <li>
          エントリーナンバー
        </li>
      </ul>
    </p>
    <p>
      エントリーナンバーは、なんとjsonの記載順に自動で割り振られます。つまりナンバーを受付順に割り振るなら、新しい参加者はただ一番下に追加していくだけで正しい番号を振ってくれるわけです。便利！<br />
      ただし代償として、参加者一覧ページで番号をコピペすることができないため動画の編集とかでちょっとだけ不便。箇条書きの頭とかと同じで疑似要素っていうやつらしいです。<br />
      なお空白項目を入れても番号が飛ばされることはありません。<br />
      （あと、jsonが要素の順番を保持してるのは実はデータベースの設計思想的なアレに対してイレギュラーで、利用するのはあんまり良くないらしいです。ごめん）
    </p>
    <p>
      <ul>
        <li>
          アイコン画像
        </li>
      </ul>
    </p>
    <p>
      画像はニコニコアカウントから取得します。<br />
      編集時点での仕様では、<a class="external" target="_blank" rel="noreferrer" title="121301564.jpg" href="https://dcdn.cdn.nimg.jp/nicoaccount/usericon/12130/121301564.jpg">こんな感じ</a>（運営のアイコン）で、https://dcdn.cdn.nimg.jp/nicoaccount/usericon/に「(IDの下四桁を除いた数字)/(ID).jpg」をつけることで取得できます。これをリポジトリの、/static/imgに追加しましょう。<br />
      これだけでOKです。というのも、参加者一覧ページは、「jsonに記入したユーザーIDと同名の画像」を参照して表示します。そして、上記のページのアイコンの名前は、URLの通りIDとなっています。この仕様のおかげで、画像を参照する工程をまるまる省くことができたのですね。
      え、画像のアップロードもしないでweb上の画像を直接表示すればいいじゃないかって？いやそれは…参加時点のアイコンを残しておいた方がいいかなって…<br />
      なお_idが空の場合はname（参加者名）と同名の画像を参照します。今回このケースはありませんでしたが、その際は画像の名前をユーザー名に合わせましょう。ファイル名にできない文字列が入ってたら配慮を求めるかソースを書き換えて。jsonの上にあるperformer.jsが各データを表示するパーツ部分です。
    </p>
    <p>
      この辺りが一番<s>無駄に</s>時間をかけた仕様です。よければ使ってね。<br />
      最後に、jsonはカンマの配置とか厳しいのでうっかり余計な書き換えをしないよう注意。
    </p>
    <h2 class="anchor" id="blog">更新情報の書き換え</h2>
    <p>メインページの下にある更新情報は、/src/pages/blog内のmd（Markdown）ファイルの内容を表示しています。</p>
    <p><StaticImage src="../images/omake/omake3-02.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>ファイル名はURLに。中身を見てみましょう。</p>
    <p><StaticImage src="../images/omake/omake3-03.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>Markdownファイルなので成形された画面が出てしまいますが、右のRawか編集画面からテキストを見ることができます。</p>
    <p><StaticImage src="../images/omake/omake3-04.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>
      dateで投稿日を指定。トップページにはこの順で並びます。<br />
      titleはもちろんページのタイトル。<br />
      本文の記法はMarkdownを勉強してね。
    </p>
    <p>記事の削除はmdファイルごと削除するだけ。ファイルは残したまま記事を生成しないようにする、みたいな仕組みは用意してないので悪しからず。</p>
    <h2 class="anchor" id="others">その他</h2>
    <p>
      その昔（恐らく<a class="external" target="_blank" rel="noreferrer" title="読ム-１グランプリ2019特設サイト" href="https://yomu1-2019.netlify.app/">2019年度</a>）大会サイトを初めて訪れたとき、情報の少なさに驚きました。実際には情報は無かったのではなく、ただ気付かなかったのです。スマホの画面右上のハンバーガーメニューの存在に。（確か当時はコミュニティを見ることで解決しました。そもそも情報の中心はそこだった）<br />
      サイトは他にも、スマホだとコンテンツが異様に縦長になったり、PCでも画面上端のメニューに気付きにくかったり（これは私があほなだけ）と気になるところはあったものの、それらを除けばとても好きなデザインだったため、運営に際し、この初代運営のサイトをベースとしつつアレンジを加えたサイトを作ることにしました。
    </p>
    <p>
      知識ゼロからネットの海を彷徨い、勘でGatsbyを選んだわけですが、これは正直言って失敗でした。何しろ、Gatsbyによるサイト制作に必要な知識は「html, cssの知識」「Node.jsの知識」「Reactの知識」「Gatsbyの知識」などなどが積み重なってできており、やりたいことや分からないところのためにどのレイヤーを調べれば良いのかがさっぱり分からなかったのです。これらの何れに対しても初心者だったので猶更。結果的には多少の便利機能の恩恵を受けられているような気もしますが、謎のエラーに悩まされていた時間を考えれば、この道には来るんじゃないと言わざるを得ない。<br />
      ちなみに初代運営のサイトは、よく見ると分かりますが（サイト作り始めてから気付いた）<a class="external" target="_blank" rel="noreferrer" title="Netlify" href="https://www.netlify.com/">Netlify</a>と<a class="external" target="_blank" rel="noreferrer" title="Hugo" href="https://gohugo.io/">Hugo</a>からできているらしいです。
      <a class="external" target="_blank" rel="noreferrer" title="読ム_１グランプリ サイト雛形.zip" href="https://ux.getuploader.com/YOMU_1GP2018/download/41">雛形</a>を使う場合はまた変わってくるかと思いますが、いずれにせよGatsbyよりはマシなんじゃないでしょうか。
    </p>
    <p>あとはもうちょっと細かい内容について書いていきます。</p>
    <p>
      <ul>
        <li>
          背景色が赤っぽいのは、何故かそんな気がしていたからです。もう一つの背景色である灰色は元サイトの明るい方の色で、スポイトしてみて初めて知ったのですがカラーコードが#252525となっています。意図してなのかは知らんけど。
        </li>
        <li>
          メニューの表示は、最初ハンバーガーメニューを検討していたけど実装の難しさと不便さから諦めてこうなりました。項目が少ないので分かりにくいけどスマホでは左右にスクロールするようになっていて、これは<a class="external" target="_blank" rel="noreferrer" title="VOCALOMAKETS" href="https://vocalomakets.com/">VOCALOMAKETS公式サイト</a>を参考にしています。
        </li>
        <li>
          左（スマホならホームのトップ）のスケジュールのハイライトは時期に合わせて変えていました（<a class="external" target="_blank" rel="noreferrer" title="VOCALOMAKETS" href="https://github.com/yomuonegp2022/yomuonegp2022/commit/31d7c908715cf5ed72665611323cbc8b3c8a9b60#diff-6c4665b25d9b68d0370b33ed75df4ab63d07766cdbf3a36eb36a899237c584dc">ここ</a>など）。StLinkがサイト内リンクのタグ（aタグより速くなる）。面倒ならハイライトは消しておきましょう。
        </li>
        <li>
          <StLink to="/404">404</StLink>（無いページを指定すれば飛べるけどまず踏む機会がない）には過去の動画をランダムで表示するようにしていますが、<a class="external" target="_blank" rel="noreferrer" title="404.js" href="https://github.com/yomuonegp2022/yomuonegp2022/blob/main/src/pages/404.js">ソース</a>を見ると分かるように、表示する動画リストは手打ちです。でも2022年度の動画も既に追加してあるので安心！いやまあ、面倒なら動画を表示する部分ごと消しといてください…。
        </li>
        <li>
          なんか一時期リンクとか色がバグってました。今は直ってるかも知らん。
        </li>
      </ul>
    </p>
    <p>他にも色々とあるけど、大体見たままなのでここまでにしておきます。行き当たりばったりで書いていたので大分分かりにくくなりました。サイトを使いたいけど分からないことがある、というときには気軽に<a class="external" target="_blank" rel="noreferrer" title="主催Twitter" href="https://twitter.com/ci_cei">相談</a>してください。</p>
    <StLink to="/omake">←運営感想トップに戻る</StLink>
  </Layout>
)

export default Omake3