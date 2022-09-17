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
const Omake2 = () => (
  <Layout title="運営感想 - サイトについて1">
    <Seo title="運営感想 - サイトについて1" />
    <StLink to="/omake">←運営感想トップに戻る</StLink>
    <p></p>
    <p><s>半年放置したら全部忘れた</s></p>
    <p>
      あながち冗談でもなく、ようこんなもん作れたな…と頭を抱えています。
      とりあえずサイトのコピーが作れるか試してみるか…<br />
      （画像が多くなったのでページ分けます）
    </p>
    <menu>
      <h3 style={{padding: `.5rem 0 .5rem`, marginBottom: `.5rem`}}>目次</h3>
      <p><StLink to="#copy">サイトのコピー</StLink></p>
      <p><StLink to="#mod">サイト情報の書き換え</StLink></p>
      <p style={{padding: `.5rem 0 .2rem`, margin: `.2rem .3rem .2rem`}}><StLink to="/omake3">次ページ</StLink></p>
      <p><StLink to="/omake3#performers">参加者一覧の書き換え</StLink></p>
      <p><StLink to="/omake3#blog">更新情報の書き換え</StLink></p>
      <p><StLink to="/omake3#others">その他</StLink></p>
    </menu>
    <h2 class="anchor" id="copy">サイトのコピー</h2>
    <p><StaticImage src="../images/omake/omake2-00.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>まずは<a class="external" target="_blank" rel="noreferrer" title="Github" href="https://github.com/">Github</a>に登録。</p>
    <p><StaticImage src="../images/omake/omake2-01.png" width={640} formats={["auto", "webp", "avif"]} /></p>
    <p>諸々の設定をして、ウェルカムウィンドウ的なところまで来ました。</p>
    <p><StaticImage src="../images/omake/omake2-02.png" width={360} formats={["auto", "webp", "avif"]} /></p>
    <p>あ、importってある。ここでいいのかな？</p>
    <p><StaticImage src="../images/omake/omake2-03.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p><a class="external" target="_blank" rel="noreferrer" title="yomuonegp2022" href="https://github.com/yomuonegp2022/yomuonegp2022">このサイトのリポジトリのURL</a>を入れてみます。（Your old repositoryではないけど）</p>
    <p><StaticImage src="../images/omake/omake2-04.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p>できちゃった…</p>
    <p><StaticImage src="../images/omake/omake2-05.png" width={640} formats={["auto", "webp", "avif"]} /></p>
    <p>とりあえずこれで良しとしましょう。（ページの右、Contributorsに謎のアカウントがいますが、Github Desktopの謎仕様で最初の頃コミットしてたことになってた私です）</p>
    <p><StaticImage src="../images/omake/omake2-06.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p>続いて<a class="external" target="_blank" rel="noreferrer" title="Gatsby Cloud" href="https://www.gatsbyjs.com/products/cloud/">Gatsby Cloud</a>に登録。</p>
    <p><StaticImage src="../images/omake/omake2-07.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>Add a site → Githubを選んで…</p>
    <p><StaticImage src="../images/omake/omake2-08.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>実は先にGatsby Cloudの登録をしてしまっていた関係でちょっと飛びましたが、連携的なものをするとなんやかんやでこんな感じに自分のリポジトリが出てきます。</p>
    <p><StaticImage src="../images/omake/omake2-09.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>サイトのURLとかを設定。</p>
    <p><StaticImage src="../images/omake/omake2-10.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p>ようわからんけどたぶんこのままでOK。</p>
    <p><StaticImage src="../images/omake/omake2-11.png" width={720} formats={["auto", "webp", "avif"]} /></p>
    <p>これで準備は完了、自動でビルドが始まります。</p>
    <p><StaticImage src="../images/omake/omake2-12.png" width={360} formats={["auto", "webp", "avif"]} /></p>
    <p>なんか勝手にやり直しが発生するので実際は10分ほどかかってるけど、無事にビルド完了！</p>
    <p><StaticImage src="../images/omake/omake2-13.png" width={720} formats={["auto", "webp", "avif"]} /></p>
    <p>同じ内容のサイトが生まれました！あとはGithubのソースをいじるだけ！</p>
    <p>
      ローカルの開発環境はまあ、調べてできそうならって感じで…。<br />
      ちょっと年度の文字とか参加者情報とかいじるだけなら、最悪Githubのサイト上でなんとかなるんじゃないかと思います。<br />
      （追記: この後ノートPCで作業したくなったので試したところ、普通にnode.jsをインストール→npmでyarnとgatsby-cliをインストール→クローンしたリポジトリでnpm install→ (package-lock.jsonが勝手に更新されるので念のため元に戻す→) gatsby develop、で上手くいきました。思ってたより簡単だった）<br />
      （追記2: <a class="external" target="_blank" rel="noreferrer" title="The github.dev web-based editor" href="https://docs.github.com/ja/codespaces/the-githubdev-web-based-editor">web上でエディタを開ける機能</a>が去年から始まってたみたいですね。もちろんビルドのプレビューはできないけど、複数のファイルを編集したり削除・追加したいときには便利（さらに追: このおまけページとか消す必要があるので…））
    </p>
    <h2 class="anchor" id="mod">サイト情報の書き換え</h2>
    <p>というわけでいじってみましょう。</p>
    <p><StaticImage src="../images/omake/omake2-14.png" width={640} formats={["auto", "webp", "avif"]} /></p>
    <p>/src/componentsのheader.js及びlayout.jsが、各ページに共通で表示される要素です。まずはheader.jsの2022を2023に変更してみましょう。</p>
    <p><StaticImage src="../images/omake/omake2-15.png" width={720} formats={["auto", "webp", "avif"]} /></p>
    <p>鉛筆マークから…</p>
    <p><StaticImage src="../images/omake/omake2-16.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>ここを変更。（済）</p>
    <p><StaticImage src="../images/omake/omake2-17.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p>説明は適宜入力して（しなくてもいい）、Commit change。</p>
    <p><StaticImage src="../images/omake/omake2-18.png" width={360} formats={["auto", "webp", "avif"]} /></p>
    <p>1文字しか変更していないというのに、即座にビルドが始まります。サービスに余計な負荷をかけていこう！</p>
    <p><StaticImage src="../images/omake/omake2-19.png" width={360} formats={["auto", "webp", "avif"]} /></p>
    <p>はやい</p>
    <p><StaticImage src="../images/omake/omake2-20.png" width={480} formats={["auto", "webp", "avif"]} /></p>
    <p>スマホで表示したときのタイトルが2023に変わりました！（そこ？）（スマホでの見え方はChromeならF12 → Ctrl + Shift + Mで確認できます）</p>
    <p><StaticImage src="../images/omake/omake2-21.png" width={420} formats={["auto", "webp", "avif"]} /></p>
    <p>そういえばタイトルとかは別のとこをいじんなきゃいけないのでした。<br />/gatsby-config.jsで、諸々の2022を2023に変えましょう。検索して見逃しのないように。あっなぜか2021になってるとこある…</p>
    <p><StaticImage src="../images/omake/omake2-22.png" width={720} formats={["auto", "webp", "avif"]} /></p>
    <p>layout.jsも更新して、こうなりました。（gatsby-config.js含め、ツイッターIDや各リンクは変えてません。流用の際はご注意。メールアドレスは一応最低限のスパム対策でデシマルコード化しています）</p>
    <p>他の各ページ（/src/pages）にも色々と更新要素があるかと思いますので、よくチェックしてみてください。（ページのリンクは一度は全部踏んでみよう）</p>
    <p>
      追記: 結構大事な見逃しがありました。layout.jsの一番下、©の部分、「&#123;new Date().getFullYear()&#125;」は現在の年を返してしまうので、ここも適宜修正してください。<br />
      ただここの年号、そもそもは著作権表示に伴う発行年や更新年を指すやつなのでこういう書き方になっていて…、正確な記述にしようと思うと開催年度も別で書き入れて下のようになってしまうので、まあお好みで…
    </p>
    <p>後半では特殊な仕様のページの扱いと、その他細かいことを書きます。</p>
    <p>（また追記: あと申し訳ないけど、このあとがきページ達とsrc/components/images/omakeの説明用画像の削除も忘れずに…サイト内でここへのリンクは更新情報（後述）にしかないので最悪そこを消すだけでも大丈夫）</p>
    <p><StLink to="/omake3">次ページへ続く</StLink></p>
    <StLink to="/omake">←運営感想トップに戻る</StLink>
  </Layout>
)

export default Omake2