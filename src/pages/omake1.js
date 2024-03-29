import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`
const Omake1 = () => (
  <Layout title="運営感想 - はじめに">
    <Seo title="運営感想 - はじめに" />
    <StLink to="/omake">←運営感想トップに戻る</StLink>
    <p></p>
    <p style={{ paddingBottom: `3rem`, }}>お疲れ様でした！ワ〜〜〜〜！！！</p>
    <p>
      とりあえず、比較的運営に際して参考になるかもしれない、けど
      <a class="external" target="_blank" rel="noreferrer" title="読ム-1グランプリ専用アップローダー" href="https://ux.getuploader.com/YOMU_1GP2018/">引き継ぎ資料</a>
      に残すほどではないかな…という内容をだらだらと述べていきます。何か余計なことを言うかもしれないけど都合よく聞き流してください。<br />
      余計なことを言う前に言うべきことを言っておきます。今大会を無事開催できたのは、参加者、視聴者の皆さんは勿論のこと、運営に参加して下さった俺の彼女さんをはじめとして様々な形で協力・応援して下さった皆さん、この大会を作って下さった旧運営の皆さん、運営立候補制という新たな仕組みに対し最初に手を挙げ読ム-１を存続して下さったゆっくりうぐいすもちさんにその運営にご協力された皆さん、それに合成音声漫才大会の先駆者たるＶＭ－１グランプリ様、あと合成音声ソフト達やその文化を作り出してきた数えきれない方々！！皆様のお陰です。こういうの深掘りするほど見落としが心配になるよね。あったらごめんなさい。
    </p>
    <p>
      <ul>
        <li>
          紹介や講評不要というのはマジのガチだよ！！
          <a class="external" target="_blank" rel="noreferrer" title="2022年度読ム-１グランプリについて" href="https://www.nicovideo.jp/watch/sm39659238">最初の告知</a>
          で言ったように講評すら他人に投げようとしていたクチです。9割方分の参加者紹介原稿をぶつけられなければまさか作ろうとは思いませんでした。<br />
          改めて
          <StLink to="/page1">運営立候補に関するルール</StLink>
          を確認すると、運営が「行う」必要のあるものは、「開催発表」「参加作品のまとめ」「結果発表」の3つで、動画という指定もありません。こういう形で盛り上げたい！があれば乗り越えるべきハードルはまあそんなに多くはない、のかも。いや動画は欲しいかな。<br />
          参加者側・視聴者側に立てば毎回誰かが開催してくれて作品が集まる読ム-１ですが、いざ運営の側に立てば自分のお陰でそれが成り立っている（自分の需要を自分で満たしている）という満足感があります。フォーマットが続いている大会の運営だけさせてもらえるなんてお得！いや嘘です。歴史の重みがあるので大変です。こういうのは軽薄さと責任感が釣り合っているくらいが丁度良いんじゃないでしょうか。しらんけど。<br />
          あと、年度末年度始に余裕があるかは確認しておきましょうね。各種動画を作る気なら作れるところだけ早めに作っておくなどして期日に間に合うようがんばりましょう。
        </li>
        <li>
          引き継ぎ資料に参加表明メンション必須化推奨の件を載せましたが、関連して「DMのメール通知を設定しよう」があります。フォロー外からのメッセージリクエストは恥ずかしがり屋らしく、DMタブを開かないと通知にもなかなか現れないようです。ツイッターしぐさ初級編の範疇なのかなという不安があったのでここでいいやと…DM滅多に使わないので… それと質問箱等の通知も忘れずに。
        </li>
        <li>
          そんなわけで参加表明を見逃したわけですが（すみません）、それによりエントリーナンバーの順番という問題も発生していました。エントリーの日付順にしたためサイト記載後にナンバー変更があり、動画に影響を与えてしまったこともあったようです（本当にすみませんでした！）。見逃しがなければいい話ですが、万が一の際は受付順優先の方が良いでしょう（どうせ特定のナンバーを狙ってる人なんていないでしょうしね！！）。あるいは受付終了してからナンバー公開という手もあります。
        </li>
        <li>
          投票について…元々個人的な投票方針は「みんな最高！！みんな優勝！！！（みたいなところから泣く泣く候補を絞る）」というお花畑でした。とはいえ持ち票を増やせばいいというわけでもなく（極論減点採点になります）、かと言って適切な持ち票数を示す証拠は何もなく、迷いながらのルール変更でした（振り回してごめんなさい）。その前後で色々と話し合った結果、持ち票を少なくするのも一つの方針としてアリなんだなという学びを得ました。資料ではめっちゃ色々な提案をしていますが、強い思想がなければ従来の3票固定（重複アリ）でもまあ問題ないと（改めて）思います。大事なのはブレないこと。ちなみにＶＭ－１は持ち票数可変式らしいです（詳しくは向こうの運営さんに聞いてみてください）。トーナメント制もちょっとだけ見てみたい。
        </li>
        <li>
          ソフト外音声についてのアレコレは結果的には失敗だったかもしれません。
          <StLink to="/rule#supplement">例外リストに佇むBecause We Can</StLink>が切ない…。<br />
          <StLink to="/rule#work">文面</StLink>には笑い声可とありますがこれはぶっちゃけミスで、大勢によるものを想定していました。詳しい話は後々しますが、初代の「人の声を録音した物でその言葉がはっきりと聞き取れるような物は全て不可」で十分でしょう。
        </li>
        <li>
          動画提出無くし（てエントリーのルールにちゃっかり動画使用許可追加し）たのは本当になんの問題も起きなかった（今後起きたら書き換えます）ので継続でいいのではないでしょうか。やっぱりグレーな気がしないでもないですが。
        </li>
        <li>
          投票期間中のバイアス管理も難しい問題です。またＶＭ－１を参照しますがあちらでは投票期間中の荒らしコメントやネタバレタグの管理が必要で、ネタバレリスクと言えば最近はニコニ広告の動画紹介があったり、クリップを伴う投稿も簡単に行えます。それらの制限も動画設定でそれなりにできたりしますが、個人的には制限は控えめがいいかなと思っています。気になる場合に参加者は感想等投票終了までとっといてねというのは妥当な落としどころな気がします。
        </li>
      </ul>
    </p>
    <p>
      ひとまずこんなところでしょうか。こんな薄い中身で続きます。以降はまた落ち着いてから、次の立候補期間にでも間に合えばいいかな、ぐらいの気持ちでゆっくり書くつもりです。
    </p>
    <p>
      今後の予定は、
    </p>
    <p>
      <ul>
        <li>
          <b>サイトについて</b>　立候補理由の3割くらいが、「見やすいサイトを作りたい」でした。そして
          <a class="external" target="_blank" rel="noreferrer" title="yomuonegp2022" href="https://github.com/yomuonegp2022/yomuonegp2022">そのソース</a>
          は公開していて、誰でも利用できるようにしています。ではなぜこことは別に引き継ぎ資料としてサイトテンプレートを作ってもらっているのかというと、そのソースからサイトを構築するのがそれなりにめんどいからなんですね。ほぼ知識ゼロから行き当たりばったりで作るからこんなことになってしまいました。でも折角作ったので使い方やこだわりなんかについて話します。
        </li>
        <li>
          <b>動画に関するルールについて</b>　読ム-１の音声に関する禁止事項をはじめとした動画ルール、その境界線はどこにあるのか？　をあれこれ考えていましたが特に運営の役に立つことはありませんでした。
        </li>
        <li>
          <b>その他</b>　結局大体お任せしてしまったのでそんなに話すことのない運営動画のこととか、タグは全角半角まとめるようになったけどあの注釈続けんの？みたいな益々瑣末なルール関係とか、今は忘れてるけど後で思い出すかもしれないこととか。
        </li>
      </ul>
    </p>
    <p>など。更新したらまた個人の方で呟くと思います。</p>
    <StLink to="/omake">←運営感想トップに戻る</StLink>
  </Layout>
)

export default Omake1